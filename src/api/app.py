"""Flask API for TextSummarize.AI

This module exposes a small JSON API to summarize text. It avoids heavy UI
dependencies so it can be run on a server or used by the frontend.
"""
from flask import Flask, request, jsonify
import logging
import os

from utils.logging_utils import setup_logging

setup_logging()

try:
    from models.summarizer import TextSummarizer
except Exception as e:
    logging.error(f"Failed to import TextSummarizer: {e}")
    TextSummarizer = None

app = Flask(__name__)


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


@app.route("/generate_summary", methods=["POST"])
def generate_summary():
    if TextSummarizer is None:
        return jsonify({"error": "Summarizer not available on server."}), 500

    data = request.get_json() or {}
    text = data.get("text", "")
    if not text:
        return jsonify({"summary": "", "error": "No text provided."}), 400

    try:
        summarizer = TextSummarizer()
        summary = summarizer.summarize(text)
        return jsonify({"summary": summary})
    except Exception as e:
        logging.exception("Error while generating summary")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    logging.info(f"Starting TextSummarize.AI API on port {port}")
    app.run(host="0.0.0.0", port=port, debug=True)