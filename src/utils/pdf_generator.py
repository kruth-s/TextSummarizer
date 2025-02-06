from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import os

def save_summary_as_pdf(summary_text, output_path="summary.pdf"):
    """Generates a PDF from the summarized text and saves it."""
    try:
        c = canvas.Canvas(output_path, pagesize=letter)
        c.drawString(100, 750, "Generated Summary:")
        text_object = c.beginText(100, 730)
        text_object.setFont("Helvetica", 12)

        # Split text into lines to fit the PDF width
        for line in summary_text.split("\n"):
            text_object.textLine(line)

        c.drawText(text_object)
        c.save()
        return output_path
    except Exception as e:
        print(f"Error generating PDF: {e}")
        return None