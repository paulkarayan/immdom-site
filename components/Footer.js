import React from "react";
import { config } from "../config/config.yml";

export default function Footer() {
    return (
        <div className="footer">
            &copy; 2019 - {new Date().getFullYear()} {config.author}
        </div>
    );
}
