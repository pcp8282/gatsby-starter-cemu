import React from 'react'

import './footer.scss'

const Footer = () => (
  <footer className="footer">
    <hr />
    <div className="rss-feed">
      <a href="/rss.xml" aria-label="rss">
        <svg
          stroke="currentColor"
          fill="#FFA500"
          strokeWidth="0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-12.832 20c-1.197 0-2.168-.969-2.168-2.165s.971-2.165 2.168-2.165 2.167.969 2.167 2.165-.97 2.165-2.167 2.165zm5.18 0c-.041-4.029-3.314-7.298-7.348-7.339v-3.207c5.814.041 10.518 4.739 10.561 10.546h-3.213zm5.441 0c-.021-7.063-5.736-12.761-12.789-12.792v-3.208c8.83.031 15.98 7.179 16 16h-3.211z" />
        </svg>
      </a>
    </div>
    ©<a href="https://github.com/cemujax">cemujax</a>, Built with
    {` `}
    <a href="https://www.gatsbyjs.org/">Gatsby</a>
  </footer>
)

export default Footer
