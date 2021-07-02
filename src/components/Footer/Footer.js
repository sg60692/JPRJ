import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
                <div class="container">
                    <ul class="text-center footer-bot-wrap">
                        <li class="footer-bot-link">
                            <a class="inl">Email</a>
                        </li>
                        <li class="footer-bot-link">
                            <a class="inl">0129-401-6935</a>
                        </li>
                        <li class="footer-bot-link">
                            <a class="inl">Address</a>
                        </li>
                    </ul>
                    <div class="copy-right text-center footer-bot-link">
                        copyright &copy; {(new Date().getFullYear())} Tusharika Industries
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
