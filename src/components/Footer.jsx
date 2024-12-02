import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-6 bg-slate-50">
      <ul className="text-center">
        <h2 className="font-bold">Company Information</h2>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>
        <li>
          <Link to="/press">Press</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="text-center">
        <h2 className="font-bold">Customer Support</h2>
        <li>
          <Link to="/help-center">Help Center</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/shipping-returns">Shipping & Returns</Link>
        </li>
        <li>
          <Link to="/track-order">Track Order</Link>
        </li>
      </ul>
      <ul className="text-center">
        <h2 className="font-bold">Legal</h2>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms-of-service">Terms of Service</Link>
        </li>
        <li>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </li>
        <li>
          <Link to="/disclaimer">Disclaimer</Link>
        </li>
      </ul>
      <ul className="text-center">
        <h2 className="font-bold">Follow Us</h2>
        <li>
          <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</Link>
        </li>
        <li>
          <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Link>
        </li>
        <li>
          <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link>
        </li>
        <li>
          <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
