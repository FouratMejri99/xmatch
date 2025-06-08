"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Transition = Slide;

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogContent, setDialogContent] = useState("");

  const handleOpen = (type) => {
    let title = "";
    let content = "";

    switch (type) {
      case "privacy":
        title = "Privacy Policy";
        content = `
          At FootTunisia, your privacy is our priority. This policy outlines how we collect, use, and protect your personal information.

          We collect basic information like your name, email address, and preferences to enhance your experience. This data is never sold or shared with third parties without consent.

          Cookies are used to personalize content and analyze site traffic. You can manage your cookie preferences through your browser settings.

          All sensitive data is encrypted and stored securely. We implement robust security practices to ensure data protection.

          By using our platform, you consent to our privacy policy. For any questions, contact support@foottunisia.com.
        `;
        break;

      case "terms":
        title = "Terms of Use";
        content = `
          Welcome to FootTunisia. By accessing or using our services, you agree to comply with the following terms:

          1. Content Usage: All content is for personal use only. Unauthorized copying or distribution is prohibited.

          2. Account Responsibility: You are responsible for maintaining the confidentiality of your account credentials.

          3. Prohibited Activities: You agree not to misuse our services, including any form of hacking or data scraping.

          4. Termination: We reserve the right to suspend accounts that violate our policies without notice.

          We may update these terms occasionally. Continued use of the site implies acceptance of any changes.

          For the full legal document, please contact our legal team at legal@foottunisia.com.
        `;
        break;

      case "contact":
        title = "Contact Us";
        content = `
          We’d love to hear from you!

          For general inquiries, partnerships, or support, please reach out through the following channels:

          - Email: support@foottunisia.com
          - Phone: +216 12 345 678
          - Social Media: Follow us on Twitter, Instagram, and Facebook @FootTunisia

          Our team is available Monday to Friday from 9:00 AM to 5:00 PM (GMT+1). We strive to respond within 24–48 hours.

          Whether you have feedback, questions, or suggestions, we are here to help.
        `;
        break;

      default:
        break;
    }

    setDialogTitle(title);
    setDialogContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side: Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold hover:text-green-400">
              FootTunisia
            </Link>
            <p className="text-sm text-gray-400 mt-1">
              © {new Date().getFullYear()} FootTunisia. All rights reserved.
            </p>
          </div>

          {/* Right Side: Interactive Links */}
          <div className="flex space-x-6 text-sm">
            <button
              onClick={() => handleOpen("privacy")}
              className="hover:text-green-400"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleOpen("terms")}
              className="hover:text-green-400"
            >
              Terms of Use
            </button>
            <button
              onClick={() => handleOpen("contact")}
              className="hover:text-green-400"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Smooth Centered Scrollable Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        transitionDuration={400}
        keepMounted
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent
          dividers
          sx={{
            maxHeight: 300,
            overflowY: "auto",
            whiteSpace: "pre-line",
          }}
        >
          <Typography variant="body1">{dialogContent}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="success">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </footer>
  );
}
