import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const content = [
  {
    title: 'General',
    content: <div></div>
  },
  {
    title: 'Epic Games alternative login',
    content: <div></div>
  }
]

const DocumentationNavBar = () => {
  return (
    <div>
      <ul>
        <h3>Home</h3>
        <ul>
          <h3>Troubleshooting</h3>
          <li>
            <a href="#">General</a>
          </li>
          <li>
            <a href="#">Epic Games alternative login</a>
          </li>
        </ul>
        <ul>
          <h3>Getting Started with Heroic</h3>
          <li>
            <a href="#">EOS Overlay</a>
          </li>
          <li>
            <a href="#">How To: DOSBOX and SCUMMVM</a>
          </li>
          <li>
            <a href="#">How To: Other Tools and Wrappers</a>
          </li>
        </ul>
        <ul>
          <h3>Getting Started with Heroic</h3>
          <li>
            <a href="#">EOS Overlay</a>
          </li>
          <li>
            <a href="#">How To: DOSBOX and SCUMMVM</a>
          </li>
          <li>
            <a href="#">How To: Other Tools and Wrappers</a>
          </li>
        </ul>
        <ul>
          <h3>Linux, macOS, and Steam Deck</h3>
          <li>
            <a href="#">Steam Deck</a>
          </li>
        </ul>
        <ul>
          <h3>Game Fixes</h3>
          <li>
            <a href="#">Game Workarounds</a>
          </li>
          <li>
            <a href="#">Fall Guys</a>
          </li>
          <li>
            <a href="#">GTAV / RDR2</a>
          </li>
          <li>
            <a href="#">Tony Hawk's Pro Skater 1+2</a>
          </li>
          <li>
            <a href="#">Fallout: London</a>
          </li>
        </ul>
        <ul>
          <h3>Contributing</h3>
          <li>
            <a href="#">Contributing</a>
          </li>
          <li>
            <a href="#">Translations</a>
          </li>
          <li>
            <a href="#">Gamepad Navigation</a>
          </li>
        </ul>
        <li>
          <a href="#">custom theme</a>
        </li>
        <li>
          <a href="#">Trivia</a>
        </li>
      </ul>
    </div>
  )
}

const DocumentationContent = () => {
  return <div></div>
}

const Documentation: NextPage = () => {
  return (
    <>
      <Head>
        <title>Documentation</title>
        <meta
          name="description"
          content="An Open Source Epic, GOG and Amazon Prime Games Launcher"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DocumentationNavBar />
    </>
  )
}

export default Documentation
