# src/models/summarizer.py
from transformers import BartTokenizer, BartForConditionalGeneration
import torch
import logging
import os
from utils.logging_utils import setup_logging


class TextSummarizer:
    def __init__(self):
        setup_logging()
        self.model_name = os.environ.get('SUMMARIZER_MODEL', 'facebook/bart-large-cnn')
        self.test_mode = os.environ.get('TEST_MODE', '') == '1'

        if self.test_mode:
            logging.info("Initializing TextSummarizer in TEST_MODE (dummy summarizer).")
            self.tokenizer = None
            self.model = None
            return

        # choose device
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        try:
            self.tokenizer = BartTokenizer.from_pretrained(self.model_name)
            self.model = BartForConditionalGeneration.from_pretrained(self.model_name).to(self.device)
            logging.info(f"BART model '{self.model_name}' loaded successfully on {self.device}.")
        except Exception as e:
            logging.error(f"Failed to load the BART model: {e}")
            raise

    def summarize(self, text):
        logging.info("Starting summarization process.")
        if not text:
            logging.info("Empty input received for summarization. Returning empty string.")
            return ""

        if self.test_mode:
            # Simple heuristic shortener for tests: return first sentence or first 50 chars
            logging.info("TEST_MODE: returning short heuristic summary.")
            first_sentence = text.split('.')
            if first_sentence and first_sentence[0].strip():
                return first_sentence[0].strip() + '.'
            return text[:100].strip()

        try:
            inputs = self.tokenizer([text], max_length=1024, return_tensors='pt', truncation=True)
            input_ids = inputs['input_ids'].to(self.device)
            summary_ids = self.model.generate(input_ids, max_length=150, min_length=40, length_penalty=2.0, num_beams=4, early_stopping=True)
            summary = self.tokenizer.decode(summary_ids[0], skip_special_tokens=True)
            logging.info("Summarization complete.")
            return summary
        except Exception as e:
            logging.error(f"Error during summarization: {e}")
            return "Error in summarization process."


if __name__ == "__main__":
    ts = TextSummarizer()
    test_text = "The quick brown fox jumps over the lazy dog multiple times. This sentence serves as a common typing practice text, known for containing every letter in the English alphabet."
    print("Original Text:", test_text)
    print("Summarized Text:", ts.summarize(test_text))
