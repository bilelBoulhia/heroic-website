import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

type contentType = {
  section?: string
  title: string
  content: React.ReactNode
}

const contents: contentType[] = [
  {
    title: 'Home',
    content: (
      <div
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          lineHeight: '1.6',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '20px',
          color: '#333'
        }}
      >
        <h2>Welcome to the Heroic Games Launcher wiki!</h2>

        <h3>What is the Heroic Games Launcher?</h3>
        <p>
          Heroic Games Launcher, or simply "Heroic", is a native GUI alternative
          to the Epic Games Launcher (EGL) for Linux, Windows and MacOS.
          <br />
          It is open source under GPLv3 and is maintained by a community of
          developers that work <strong>for free on their free time</strong>.
        </p>

        <p>
          Currently, Heroic supports Epic games (through Legendary, a CLI tool
          that deals with authentication, downloading, and launching Epic Games)
          and GOG games (through GOGdl, a CLI tool that deals with
          authentication, downloading, and launching GOG games).
        </p>

        <p>
          Support to add your own games (think Steam's "Add Non-Steam Game"
          feature) is also available.
        </p>

        <h3>
          Why should you use{' '}
          <em>
            <strong>Heroic?</strong>
          </em>
        </h3>

        <p>
          Heroic is a community-built, open-source launcher. This means that
          anyone can suggest changes or find optimizations, and can check what
          the code is like under the hood!
        </p>

        <p>
          Because of that, Heroic uses less resources than the Epic Games
          Launcher, and is, in general, a lot snappier:
        </p>

        <table
          style={{
            borderCollapse: 'collapse',
            width: '100%',
            margin: '20px 0'
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                  backgroundColor: '#f5f5f5',
                  color: 'black'
                }}
              >
                Task
              </th>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                  backgroundColor: '#f5f5f5',
                  color: 'black'
                }}
              >
                Heroic
              </th>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  textAlign: 'left',
                  backgroundColor: '#f5f5f5',
                  color: 'black'
                }}
              >
                EGL
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                Installer size
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>92MB</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                150MB
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                First-launch updates
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                N / A
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                529MB
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                Disk space used
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                344MB
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                929MB
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                RAM Usage (library - Grid View)
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                ~190MB*
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                ~306MB*
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                RAM Usage (library - List View)
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                ~223MB*
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                ~368.7MB*
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                RAM Usage (store)
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                210MB*
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                450MB*
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                RAM Usage (In-game)
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                ~230MB*
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                ~232MB*
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                CPU Usage when Idle In-game
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                0-2%**
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                0-2%**
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                Linux support?
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Yes</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>No</td>
            </tr>
          </tbody>
        </table>

        <h3>Launcher Launch Time Tests:</h3>
        <p>
          Everything non-essential program-wise was closed to prevent
          interference. EGL and Heroic were set up to load into whatever is the
          default (EGL goes to EGS, and Heroic goes to the Library in List
          View).
        </p>

        <p>
          <strong>For EGL:</strong> The launch time was 16.45 seconds to open
          EGS. Note that this open the Store, and there's no option to go to the
          library on startup; as a matter of note, the EGL does have a
          persistent quick launch sidebar for the last four games you've played
          that displays on all pages.
        </p>

        <p>
          <strong>For Heroic:</strong> The Launch time is 14.37 seconds to open
          Heroic. Note that this opens to the library, and had it opened to the
          store page, it would've been slower.
        </p>

        <h3>Store Switching Tests:</h3>
        <p>
          All Footnotes above apply, as well as the human factor of "I'm not a
          robot" so the timings are a little off. For testing, the timer was
          stopped when all images had loaded onto the store preview.
        </p>

        <p>
          <strong>For EGL:</strong> Switching from the Store to the Library took
          2.02 seconds when in List View. In Grid View, this was extended to
          2.31 seconds. Doing the reverse (Library to Store) netted 2.02 seconds
          for both List View and Grid View.
        </p>

        <p>
          <strong>For Heroic:</strong> Switching from the Store to the Library
          is practically instant in either List View or Grid View (both are 0.5
          seconds or below). Doing the reverse (Library to Store) netted 5.3
          seconds (List View) and 5.8 seconds (Grid View).
        </p>

        <p>
          The reason EGS is faster in this regard is simply because the launcher
          was made to load images at the same rate as anything else on the page,
          Heroic is slower in this regard. For the curious, if you tweaked the
          restriction to "loading the page to being recognisably the EGS site",
          then the numbers are about the same (2.7 seconds for list view, 2.9
          seconds for Grid View).
        </p>

        <h3>Which games are not supported by Heroic?</h3>
        <p>
          Currently, only games that require activation{' '}
          <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues/2859">
            in Origin
          </a>{' '}
          are unsupported.
          <br />
          Legendary recently added support for it with the <code>
            activate
          </code>{' '}
          command, so expect support for it in a future release.
        </p>

        <h3>Can Heroic use EOS?</h3>
        <p>
          Yes! As of 18/07/2022 (
          <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/tag/v2.4.0-beta.2">
            2.4.0 - beta 2
          </a>
          ), Heroic has made it easy to enable support, as long as DXVK is
          updated to its latest version, and will apply for that Wine prefix. It
          can be downloaded via the Heroic Settings and can be found on the Game
          Page, then in the "Tools" menu. You may also need to install{' '}
          <code>corefonts</code> from winetricks.
        </p>

        <p>
          Legendary had already added support for it via it's 20.24 version on
          09/01/2022 (
          <a href="https://github.com/derrod/legendary/releases/tag/0.20.24">
            see here
          </a>
          ), but it was only for Windows.
        </p>

        <h3>Footnotes:</h3>
        <div
          style={{
            fontSize: '0.9em',
            color: '#666',
            borderTop: '1px solid #eee',
            marginTop: '40px',
            paddingTop: '20px'
          }}
        >
          <p>
            * Initially, RAM usage was higher for both Heroic and the EGL. After
            around a minute, these values shown were recorded.
          </p>
          <p>
            ** Tested on a Ryzen 5 1500x (4 cores, 8 threads; Windows counts the
            threads as cores on Task Manager weirdly) running Windows 10 Pro,
            and 8GB DDR4 RAM.{' '}
            <a href="https://imgur.com/a/jfV48v7">
              All data collected can be found here
            </a>
            , and was run on{' '}
            <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/tag/v2.0.2">
              2.0.2 Zoro Hotfix #2
            </a>
            . This graph will be updated after 2.4.0 gets out of beta, so watch
            this space!
          </p>
        </div>
      </div>
    )
  },
  {
    section: 'Troubleshooting',
    title: 'General',
    content: (
      <div
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          lineHeight: '1.6',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '20px',
          color: '#333'
        }}
      >
        <h1>General Debugging Tips</h1>

        <p>
          First thing to know is that Heroic is just a GUI (Graphical
          Interface), unlike Lutris, it doesn't call wine/proton directly, it
          uses Legendary for it. So is good to have in mind that some issues
          that you might have with some game might not be related with Heroic or
          even with Legendary as well.
        </p>

        <h2>Config Files</h2>
        <p>Those are stored under:</p>
        <ul>
          <li>
            <strong>Linux:</strong> ~/.config/heroic (settings, caching, gog
            installed games and metadata, and logs) and ~/.config/legendary
            (epic installed games, metadata, user information, etc).
          </li>
          <li>
            <strong>Linux/SteamOS (Flatpak):</strong>{' '}
            ~/.var/app/com.heroicgameslauncher.hgl/config/heroic/ and
            ~/.var/app/com.heroicgameslauncher.hgl/config/legendary/,
          </li>
          <li>
            <strong>Windows:</strong> %AppData%\heroic (caching),
            %UserProfile%\.config\heroic and %UserProfile%\.config\legendary.
          </li>
          <li>
            <strong>MacOSX:</strong> ~/Library/Application Support/heroic
            (caching), ~/.config/heroic and ~/.config/legendary.
          </li>
        </ul>

        <p>
          The General settings for Heroic is the file called config.json.
          Caching is stored under the store folder. The Game settings and Game
          Logs (Installation and PlayLogs) are in the GameConfig folder.
        </p>

        <h2>Not Supported Games</h2>
        <p>
          Right now Heroic doesn't support games that require an external
          launcher like Origin or Uplay.
        </p>

        <h2>How to read output from game launch</h2>
        <p>
          Go to the GamePage clicking on the GameCard, and then click on the
          Tools tab on the top and then click on Latest Log. That will open a
          log file with everything that happened when you tried to launch the
          game. With that, you can start troubleshooting and use it to get help
          on our Discord Server or on any Linux Community.
        </p>

        <h2>Game Won't Launch</h2>
        <p>
          Several things can cause that and probably Heroic has little or
          nothing to do with it. But, one thing you can check is the
          Compatibility with the game on ProtonDB, even though there you will
          find more things related to the game on Steam and might not apply to
          the Epic Games version.
        </p>
        <p>Another thing is to check the latest log like was said above.</p>
        <p>
          Some games like Borderlands 2 and Borderlands: The Pre-Sequel, need
          that you install some things on the prefix first. Normally the needed
          files stay under a folder called redist or something similar under the
          game folder and have all the necessary exe or msi files. To install
          them, open the Game Settings and go to the Wine Tab. Then you can use
          the feature called Install EXE on prefix to install those files.
        </p>
        <p>
          Sometimes, after a long time without using Heroic, your credentials
          might expire, we are working on showing a message about that and ask
          to login again, but for now, nothing is shown and when trying to
          launch the game, nothing will happen. So you will need to manually
          click logout and restart Heroic. Login again and then launch your
          game. All your games will be there, don't worry about them being
          uninstalled.
        </p>

        <h2>Wine not found error when launching</h2>
        <p>
          If you are using an old version of Heroic, prior to 2.3.0, you might
          encounter this error and it is simple to solve. Just go to the game
          settings, wine settings, then select a different wine version and then
          get back to the other one. In case you have only one version being
          shown, try downloading a new version from the Wine Manager. This is
          due to some changes that we did on how we handle settings from 2.3.0.
        </p>

        <h2>
          Game still shows as installed after uninstalling or uninstalled after
          installing
        </h2>
        <p>
          Most of the time, this can be fixed by Refreshing the Library (found
          under the User Submenu). If that doesn't fix it. Call for help in our
          Discord Server.
        </p>

        <h2>
          Game installed but on a different path and Heroic can't launch it
        </h2>
        <p>
          For that, you can use the helper on the GamePage that fixes the
          installed path. Go to the game page, click on the settings button and
          choose to change the installed path. If that doesn't work for some
          reason, you can fix it manually by changing the path on the
          .config/legendary/installed.json file.
        </p>

        <h2>
          Heroic doesn't open, never loads games after login or shows a Blank
          Window
        </h2>
        <p>Close the App or kill the process if necessary then:</p>
        <ol>
          <li>
            Try removing/renaming the Heroic folder and the Legendary folder:
            ~/.config/legendary.
          </li>
          <li>
            And Login again with a NEW SID. It is important that you generate a
            new SID because after using it the first time it becomes invalid.
          </li>
        </ol>

        <img
          src="https://user-images.githubusercontent.com/77377160/112746130-a63b4500-8fca-11eb-8b72-461f5b80e8f6.png"
          alt="img"
        />
        <h2>Running Heroic from Terminal/Powershell to debug errors</h2>
        <ul>
          <li>
            <strong>Linux:</strong> Just open the terminal and type heroic if
            it's installed globally or launch the AppImage from it.
          </li>
          <li>
            <strong>Windows:</strong> Open Powershell and Navigate into
            %USER%\AppData\Local\Programs\heroic. Run .\Heroic.exe
          </li>
          <li>
            <strong>Mac:</strong> Open the terminal, navigate to
            /Applications/Heroic.app/Contents/MacOS and run ./Heroic
          </li>
        </ul>

        <h2>Debugging frontend Errors</h2>
        <p>
          By default, when launching Heroic from the terminal, you will be able
          to see all the backend messages, errors, warnings, etc. But not from
          the frontend. To enable the frontend logs to show up in the terminal,
          launch heroic with the --enable-logging flag. Like: heroic
          --enable-logging or ELECTRON_ENABLE_LOGGING=true heroic on Linux and
          MacOSX.
        </p>

        <h2>Interesting solved issues</h2>
        <ul>
          <li>
            <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues/577">
              Protocol Not registered
            </a>
          </li>
          <li>
            <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues/526">
              Heroic doesn't load games because of locale issue
            </a>
          </li>
          <li>
            <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues/310">
              Issues with missing python libs (especially OpenSuse Tumbleweed)
            </a>
          </li>
          <li>
            <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues/1097">
              Heroic doesn't load the library
            </a>
          </li>
        </ul>
      </div>
    )
  },
  {
    section: 'Troubleshooting',
    title: 'Epic Games alternative login',
    content: (
      <div
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          lineHeight: '1.6',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '20px',
          color: '#333'
        }}
      >
        <h2>How To: Epic Alternative Login</h2>

        <p>
          If you have any trouble using the built-in login method for Epic
          games, you can still try to Login using the alternative method. It is
          also useful if you already logged in on Epic in your Browser, so you
          don't have to Login again in Heroic.
        </p>

        <p>To do that you need to follow the instructions below:</p>

        <img
          src="https://user-images.githubusercontent.com/26871415/199692349-49e1ff05-d4bb-477a-ae0e-8f230e740ace.png"
          alt="img"
        />
        <ol style={{ marginLeft: '20px' }}>
          <li>
            then Click on the link to open the Epic Games Store:
            <img
              src="https://user-images.githubusercontent.com/26871415/199689179-ed44c7eb-c4de-45c9-855c-34325e2edd20.png"
              alt="img"
            />
          </li>

          <li>
            The Epic Games Store will open for you to login on the browser (if
            you are already logged in then you will get the information below
            right away)
          </li>
          <li>
            so Copy only the AUTHORIZATION CODE string and paste it in Heroic
            <img
              src="https://user-images.githubusercontent.com/26871415/199690129-80ddc882-d6ba-49c8-baef-c1d3d484331f.png"
              alt="img"
            />
          </li>

          <li>
            after that,Click on Login and you should be logged in to the Epic
            store
          </li>
        </ol>

        <p>Your games will be loaded once you get to the library page.</p>
      </div>
    )
  },
  {
    section: 'Getting Started with Heroic',
    title: 'Glossary',
    content: (
      <div
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          lineHeight: '1.6',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '20px',
          color: '#333'
        }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <h2 id="eaac">EAAC</h2>
          <p>
            EA (Electronic Arts) AntiCheat, an anti-cheat system from EA,
            announced in September 2022.
          </p>
          <p>
            Not to be confused with <a href="#eac">EAC</a>
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="eac">EAC</h2>
          <p>
            Easy Anti-Cheat, an anti-cheat system commonly used in multi-player
            games. Games using EAC almost always require additional workarounds
            to get working under Wine or Proton, and many are unplayable under
            Wine/Proton.
          </p>
          <p>
            Not to be confused with <a href="#eaac">EAAC</a>
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="eos-overlay">EOS Overlay</h2>
          <p>
            Epic Online Services Overlay, the in-game overlay for games from the
            Epic Games Store. The EGS counterpart to the Steam Overlay and GOG
            Galaxy Overlay.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="esync">ESync</h2>
          <p>
            Wine eventfd-based synchronization, a wineserver feature to reduce
            overhead for synchronization objects. See the Lutris{' '}
            <a href="https://github.com/lutris/docs/blob/master/HowToEsync.md">
              How To Esync
            </a>{' '}
            guide for how to check whether your system supports ESync.
          </p>
          <p>
            See also <a href="#fsync">FSync</a>
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="fsync">FSync</h2>
          <p>
            A more performant ESync, but one that requires kernel-level support.
            This is available in the mainline Linux kernel from 5.16 onwards
            <sup>
              <a href="https://forums.lutris.net/t/fsync/14179/2">*</a>
            </sup>
            .
          </p>
          <p>
            See also <a href="#esync">ESync</a>
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="feral-gamemode">Feral GameMode</h2>
          <p>
            GameMode is a daemon/lib combo for Linux that allows games to
            request a set of optimisations be temporarily applied to the host OS
            and/or a game process.
          </p>
          <p>
            <a href="https://github.com/FeralInteractive/gamemode">
              GitHub Repository
            </a>
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="fsr">FSR</h2>
          <p>
            AMD FideltyFX Super Resolution, a hardware-assisted upscaling
            feature on AMD GPUs.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="gamemode">GameMode</h2>
          <p>
            See <a href="#feral-gamemode">Feral GameMode</a>
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="ge">GE</h2>
          <p>
            A common abbreviation of{' '}
            <a href="https://github.com/GloriousEggroll">GloriousEggroll</a>,
            aka Thomas Crider, author of custom Wine and Proton builds.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="mangohud">MangoHud</h2>
          <p>
            MangoHud is an overlay for monitoring FPS, temperatures, CPU/GPU
            load, etc. for Vulkan and OpenGL applications.
          </p>
          <p>
            <a href="https://github.com/flightlessmango/MangoHud">
              GitHub Repository
            </a>
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="proton">Proton</h2>
          <p>
            Valve's fork of <a href="#wine">Wine</a> with additional components
            and patches. Some changes eventually make it into upstream Wine.
          </p>
          <p>
            <a href="https://github.com/ValveSoftware/Proton">
              GitHub Repository
            </a>
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="resizable-bar">Resizable BAR</h2>
          <p>
            An optional feature on NVIDIA 30xx cards that gives the CPU access
            to the whole GPU framebuffer at once, which may improve performance
            on some games.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="scout">scout</h2>
          <p>
            The codename for Steam Runtime version 1, which uses{' '}
            <code>LD_LIBRARY_PATH</code> and is used for native Linux games and
            by Proton 5.0 and earlier.
          </p>
          <p>
            See also <a href="#steam-linux-runtime">Steam Linux Runtime</a> and{' '}
            <a href="#scout">scout</a>
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="soldier">soldier</h2>
          <p>
            The codename for Steam Runtime version 2, which uses containers and
            is used by Proton 5.13 and later.
          </p>
          <p>
            See also <a href="#steam-linux-runtime">Steam Linux Runtime</a> and{' '}
            <a href="#soldier">soldier</a>
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="steam-linux-runtime">Steam Linux Runtime</h2>
          <p>
            The Steam Linux runtime is a binary linux environment under which
            native Linux games can be run to avoid having to manually install
            all the game's dependencies, or to avoid dependency hell for games
            that are binary-incompatible with the library versions shipped by
            your distribution.
          </p>
          <p>
            <a href="https://github.com/ValveSoftware/steam-runtime">
              GitHub Repository
            </a>
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="wine">Wine</h2>
          <blockquote
            style={{
              borderLeft: '4px solid #ddd',
              paddingLeft: '1rem',
              margin: '1rem 0'
            }}
          >
            Wine (originally an acronym for "Wine Is Not an Emulator") is a
            compatibility layer capable of running Windows applications on
            several POSIX-compliant operating systems, such as Linux, macOS, &
            BSD. Instead of simulating internal Windows logic like a virtual
            machine or emulator, Wine translates Windows API calls into POSIX
            calls on-the-fly, eliminating the performance and memory penalties
            of other methods and allowing you to cleanly integrate Windows
            applications into your desktop.
          </blockquote>
          <p>
            See also <a href="#proton">Proton</a>
          </p>
          <p>
            <a href="https://www.winehq.org/">Official Website</a>
          </p>
        </div>
      </div>
    )
  },
  {
    section: 'Getting Started with Heroic',
    title: 'EOS Overlay',
    content: (
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          fontFamily: 'system-ui'
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}
          >
            Installing EOS Overlay on Linux
          </h1>

          <div
            style={{
              backgroundColor: '#fff8e1',
              borderLeft: '4px solid #ffd54f',
              padding: '16px',
              marginBottom: '24px'
            }}
          >
            <p style={{ color: '#664d03' }}>
              <strong>Important Note:</strong> The EOS Overlay is{' '}
              <em>installed</em> once (globally) but <em>enabled</em> per-game.
              You'll need to repeat these instructions for each game you want to
              use the overlay with.
            </p>
          </div>

          <ol style={{ listStyle: 'decimal', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '24px' }}>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}
              >
                Navigate to the Game Page
              </h2>
              <p style={{ marginBottom: '12px' }}>
                Click on the game's logo in the library to get to the Game Page:
              </p>
              <img
                src="https://user-images.githubusercontent.com/34034631/193338961-db808e22-b056-4b58-8cdd-e6f8cf870d36.png"
                alt="Game Page Navigation"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }}
              />
            </li>

            <li style={{ marginBottom: '24px' }}>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}
              >
                Enable the Overlay
              </h2>
              <p style={{ marginBottom: '12px' }}>
                Click "Tools" {'->'} "Enable EOS Overlay"
              </p>
              <img
                src="/https://user-images.githubusercontent.com/34034631/193339394-6cbcdeb0-b517-43ab-978c-d99a721eb244.png"
                alt="Enable Overlay"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }}
              />
              <p style={{ marginBottom: '12px' }}>
                Heroic will now install the overlay (if not installed already)
                and enable it <em>for this game</em>
              </p>
            </li>

            <li style={{ marginBottom: '24px' }}>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}
              >
                Enable DXVK
              </h2>
              <p style={{ marginBottom: '12px' }}>
                Go back to the "Info" tab and click "Settings":
              </p>
              <img
                src="https://user-images.githubusercontent.com/34034631/193340192-09942804-3b7f-4932-a3a3-2f968e56cfce.png"
                alt="DXVK Settings"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }}
              />
              <p style={{ marginBottom: '12px' }}>
                In the "Wine Extensions" tab, make sure "Auto Install/Update
                DXVK on Prefix" is checked:
              </p>
              <img
                src="https://user-images.githubusercontent.com/34034631/193340796-de6d55e7-8a46-4eb7-9c2b-310a8168d043.png"
                alt="DXVK Checkbox"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }}
              />
            </li>

            <li style={{ marginBottom: '24px' }}>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}
              >
                Install corefonts
              </h2>
              <p style={{ marginBottom: '12px' }}>
                Go back to the "Wine" tab of the Game Settings & click the
                "Winetricks" button (scrolling down might be necessary):
              </p>
              <img
                src="https://user-images.githubusercontent.com/34034631/193341307-51666b22-d58c-4eeb-8e54-78da20417026.png"
                alt="Winetricks Button"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }}
              />

              <div>
                <p style={{ marginBottom: '12px' }}>
                  After a while, a window should pop up:
                </p>
                <img
                  src="https://user-images.githubusercontent.com/34034631/193342230-12d718d3-c7a7-451c-b43b-8054088ec2d3.png"
                  alt="Winetricks Button"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    marginBottom: '16px'
                  }}
                />
                <ol style={{ listStyle: 'lower-alpha', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '8px' }}>
                    Make sure "Select the default wineprefix" is selected, then
                    click "OK" at the bottom.
                  </li>

                  <li style={{ marginBottom: '8px' }}>
                    Select "Install a font" & click OK
                  </li>
                  <img
                    src="https://user-images.githubusercontent.com/34034631/193343407-e54190a5-0a81-4007-82da-01a68542b92b.png"
                    alt="Winetricks Button"
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      marginBottom: '16px'
                    }}
                  />
                  <li style={{ marginBottom: '8px' }}>
                    In the font list, make sure `corefonts` is ticked, then
                    click OK
                  </li>
                  <img
                    src="https://user-images.githubusercontent.com/34034631/193343654-6242a4e3-efcc-43ed-b430-ef6c5c7e23d6.png"
                    alt="Winetricks Button"
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      marginBottom: '16px'
                    }}
                  />
                </ol>
              </div>

              <p style={{ marginBottom: '12px' }}>
                Winetricks will now close and install the fonts. It might take a
                couple of minutes. Any warning messages about a 64-bit prefix
                can be ignored.
              </p>

              <p>
                Once everything's installed, the font list will open up again.
                Click "Cancel"/close the window 3 times to quit out of
                Winetricks
              </p>
            </li>
          </ol>
        </div>
      </div>
    )
  },
  {
    section: 'Getting Started with Heroic',
    title: 'How To: DOSBOX and SCUMMVM',
    content: (
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          fontFamily: 'system-ui'
        }}
      >
        <h1
          style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '24px' }}
        >
          Running DOSBox and ScummVM Games Using Native Builds
        </h1>

        <div
          style={{
            backgroundColor: '#0c0c0c',
            padding: '26px',

            borderRadius: '8px',
            marginBottom: '24px'
          }}
        >
          <p style={{ marginBottom: '8px' }}>
            <strong>Note:</strong>
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
            <li>
              Automatic native runners feature is used only on Linux, for
              Windows builds of games
            </li>
            <li> Only available for GOG and Amazon games</li>
          </ul>
        </div>

        <p style={{ marginBottom: '16px' }}>
          Starting Heroic 2.15.0, all DOSBox and ScummVM games will be run using
          native builds of these tools.
        </p>

        <h2
          style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}
        >
          Supported Tools and Locations
        </h2>

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '24px'
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: '12px',
                  textAlign: 'left',
                  border: '1px solid #ddd'
                }}
              >
                Tool
              </th>
              <th
                style={{
                  padding: '12px',
                  textAlign: 'left',
                  border: '1px solid #ddd'
                }}
              >
                Flatpak
              </th>
              <th
                style={{
                  padding: '12px',
                  textAlign: 'left',
                  border: '1px solid #ddd'
                }}
              >
                PATH
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                DOSBox
              </td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                io.github.dosbox-staging
              </td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                dosbox
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                ScummVM
              </td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                org.scummvm.ScummVM
              </td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                scummvm
              </td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            backgroundColor: '#0c0c0c',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px'
          }}
        >
          <p style={{ marginBottom: '8px' }}>
            <strong>Warning:</strong>
          </p>
          <p>
            The only supported build of DOSBox is DOSBox-Staging.
            <br />
            It is the only version that handles configuration files tailored for
            usage on Windows
          </p>
        </div>

        <h2
          style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}
        >
          Heroic Flatpak Setup
        </h2>
        <p style={{ marginBottom: '16px' }}>
          For Heroic flatpak, you'll need to add permissions allowing Heroic to
          run commands outside of sandbox. This will be used only to run and
          detect flatpak versions of DOSBox and ScummVM.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The required permission is: <code>org.freedesktop.Flatpak</code> talk.
        </p>

        <img
          src="https://github.com/user-attachments/assets/8eaf0d36-ef45-43b4-a164-516d69b15d2f"
          alt="Winetricks Button"
          style={{
            width: '100%',
            borderRadius: '8px',
            marginBottom: '16px'
          }}
        />
        <details style={{ marginBottom: '24px' }}>
          <summary
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: '16px',
              lineHeight: '2rem'
            }}
          >
            Manually Getting DOSBox/ScummVM Command Arguments
          </summary>
          <div style={{ paddingLeft: '16px' }}>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginTop: '16px',
                marginBottom: '12px'
              }}
            >
              For games installed using Linux offline installers
            </h3>
            <p>
              Command schemes for both tools when launching games using packaged
              binary. Check <code>start.sh</code> file for exact arguments.
            </p>
            <ul
              style={{
                listStyle: 'none',
                paddingLeft: '0',
                marginBottom: '16px'
              }}
            >
              <li style={{ marginBottom: '8px' }}>
                • DOSBox:{' '}
                <code>
                  dosbox -conf {'${conf_1}'} -conf {'${conf_2}'} -no-console -c
                  exit
                </code>
              </li>
              <li>
                • ScummVM:{' '}
                <code>scummvm -c {'${conf}'} --themepath=scummvm</code>
              </li>
            </ul>

            <h3
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '12px'
              }}
            >
              Getting launch arguments - Windows builds
            </h3>
            <ol style={{ paddingLeft: '20px' }}>
              <li>Navigate into game files</li>
              <li>
                Locate and open <code>goggame-&lt;GAMEID&gt;.info</code> file
                (&lt;GAMEID&gt; is a number like 1207658695)
              </li>
              <li>
                Look for the playTask that contains{' '}
                <code>"isPrimary": "true"</code> - this is the default launch
                command
              </li>
              <li>Note that arguments are dependent on working directory</li>
            </ol>

            <p style={{ marginTop: '16px' }}>
              Example command:
              <br />
              <code>/path/to/scummvm -c "/path/to/beneath.ini" beneath</code>
            </p>
          </div>
        </details>

        <h3
          style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}
        >
          Sample goggame.info file
        </h3>
        <pre
          style={{
            padding: '16px',

            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            marginBottom: '24px'
          }}
        >
          {`{
    "buildId": "51156444997712340",
    "clientId": "49002505861146264",
    "gameId": "1207658695",
    "language": "English",
    "languages": ["en-US"],
    "name": "Beneath a Steel Sky",
    "playTasks": [
        {
            "arguments": "-c \\"..\\\\beneath.ini\\" beneath",
            "category": "game",
            "isPrimary": true,
            "languages": ["*"],
            "name": "Beneath a Steel Sky",
            "path": "ScummVM\\\\scummvm.exe",
            "type": "FileTask",
            "workingDir": "ScummVM"
        },
        {
            "category": "document",
            "languages": ["*"],
            "name": "Manual",
            "path": "Manual.pdf",
            "type": "FileTask"
        }
    ],
    "rootGameId": "1207658695",
    "version": 1
}`}
        </pre>
      </div>
    )
  },
  {
    section: 'Getting Started with Heroic',
    title: 'How To: Other Tools and Wrappers',
    content: (
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          lineHeight: '1.6',
          color: '#333'
        }}
      >
        <h1 style={{}}>Gamescope (Linux-specific)</h1>

        <h2>What is 'gamescope'?</h2>
        <p style={{ marginBottom: '1rem' }}>
          Gamescope is something only Linux has. It is a microcompositor from
          Valve that is used on the Steam Deck. Its goal is to provide an
          isolated compositor that is tailored towards gaming and supports many
          gaming-centric features such as:
        </p>

        <ol
          style={{
            marginLeft: '2rem',
            marginBottom: '1.5rem'
          }}
        >
          <li>Spoofing resolutions.</li>
          <li>
            Upscaling using <strong>AMD FidelityFX™</strong> Super Resolution or{' '}
            <strong>NVIDIA Image Scaling</strong> (gain fps).
          </li>
          <li>
            Limit framerates / support tearing / use <strong>open-VR</strong> on
            all you installed through heroic
          </li>
          <li>
            ProtonGE: bundeled{' '}
            <strong>FSR / FSHack is gone? simply use Gamescope.</strong>
          </li>
        </ol>

        <h2>Gamescope inside of Heroic-App</h2>
        <h3>(specific per game/app)</h3>

        <p style={{ marginBottom: '1rem' }}>
          There is a plan to have a Gamescope setting in Heroic, while that is
          implemented, you can still use it with Heroic following the steps
          bellow:
        </p>

        <ol
          style={{
            marginLeft: '2rem',
            marginBottom: '1.5rem'
          }}
        >
          <li>
            Install{' '}
            <a
              href="https://github.com/Plagman/gamescope"
              style={{ color: '#0066cc', textDecoration: 'none' }}
            >
              Gamescope
            </a>{' '}
            in your system.
          </li>
          <li>
            In Heroic, open the game settings and go to the{' '}
            <strong>Other</strong> tab.
          </li>
          <li>
            On the Advanced Options (Environment Variables), put the Gamescope
            command line you want to use followed by two dashes in the end, for
            instance:{' '}
            <code>gamescope -w 1920 -h 1080 -W 3440 -H 1440 -b --</code>
          </li>
          <li>
            If you have other variables, make sure you add it add the end of the
            input like: <code style={{}}>DXVK_HUD=full gamescope ... --</code>
          </li>
          <li>
            For now, enabling <code>mangohud</code> or <code>gamemode</code>{' '}
            might make gamescope not work, so try with those options enabled
            first.
          </li>
        </ol>

        <h2>'gamescoped' Heroic</h2>
        <p>
          (all apps / games started through hgl also started through gamescope
          (including FSR-/hotkey-/etc.-capabilities))
          <br />
          (no window borders anymore)
        </p>

        <ol
          style={{
            marginLeft: '2rem',
            marginBottom: '1.5rem'
          }}
        >
          <li>
            Install{' '}
            <a
              href="https://github.com/Plagman/gamescope"
              style={{ color: '#0066cc', textDecoration: 'none' }}
            >
              Gamescope
            </a>{' '}
            in your system.
          </li>
        </ol>

        <h3>'gamescoped' Heroic - as separate app</h3>

        <ol style={{ marginLeft: '2rem' }}>
          <li>edit '~/.local/share/applications/Heroic-Deck.desktop'</li>
        </ol>

        <pre
          style={{
            padding: '1rem',
            borderRadius: '4px',
            overflowX: 'auto',
            marginBottom: '1rem',
            fontFamily: 'monospace'
          }}
        >
          [Desktop Entry] Categories=App-Starter; Comment=An Open Source
          alternative to the Epic Games launcher Exec=env GDK_BACKEND=wayland
          gamescope -w 1920 -h 1080 -f -Y -R --RT --force-grab-cursor
          --prefer-vk-device --adaptive-sync --sharpness 15 --
          /opt/Heroic/heroic --ozone-platform=x11
          --enable-features=UseOzonePlatform,WaylandWindowDecorations
          GenericName=gs_hgl Icon=heroic MimeType= Name=_Heroic_Games Path=
          StartupNotify=false StartupWMClass=Heroic Terminal=false
          TerminalOptions= Type=Application X-KDE-SubstituteUID=false
          X-KDE-Username=
        </pre>

        <ul
          style={{
            marginLeft: '2rem',
            marginBottom: '1.5rem',
            listStyle: 'none'
          }}
        >
          <li style={{ marginBottom: '0.5rem' }}>
            {
              "Hint 1: 'Exec-'line, '/opt/Heroic/heroic' is Debian/Ubuntu-specific, should be streamlined to your distro"
            }
          </li>
          <li>
            {
              "Hint 2: 'Exec-'line, for better compatability (f.e. if you want to start other electron-based apps through hgl) you could append '--use-angle=vulkan'"
            }
          </li>
        </ul>

        <ol
          style={{
            marginLeft: '2rem',
            marginBottom: '1.5rem'
          }}
        >
          <li>
            'Heroic-Deck' should be there as new app, look into
            ~/.local/share/applications/ to start it manually
          </li>
        </ol>

        <h3>'gamescoped' Heroic - as 'login-session'</h3>

        <p style={{ marginBottom: '1rem' }}>
          Use Heroic as streamlined gaming-ui or as a beamer- or smartphone-ui
          with capability of installing native linux-apps by simply 'login' to
          heroic after you powered on (through sddm, gdm etc., possibly
          password-free, f.e. through editing sddm-config)
        </p>

        <ol style={{ marginLeft: '2rem' }}>
          <li>edit '/usr/share/wayland-sessions/Heroic-Deck.desktop'</li>
        </ol>

        <pre
          style={{
            padding: '1rem',
            borderRadius: '4px',
            overflowX: 'auto',
            marginBottom: '1rem',
            fontFamily: 'monospace'
          }}
        >
          Exec=/usr/lib/x86_64-linux-gnu/libexec/plasma-dbus-run-session-if-needed
          kwin_wayland --drm /usr/share/bin/heroicdeck Name=Heroic-Deck 1080p
          (Wayland) Name[de]=Heroic-Deck 1080p (Wayland) Comment[de]=Heroic-Deck
          X-KDE-PluginInfo-Version=5.27.3
        </pre>

        <ul
          style={{
            marginLeft: '2rem',
            marginBottom: '1.5rem',
            listStyle: 'none'
          }}
        >
          <li>
            {
              "Hint: 'Exec-'line,--drm could be accompanied / replaced by --xwayland --drm --x11-display"
            }
          </li>
        </ul>

        <ol style={{ marginLeft: '2rem' }}>
          <li>edit '/usr/share/bin/heroicdeck'</li>
        </ol>

        <pre
          style={{
            padding: '1rem',
            borderRadius: '4px',
            overflowX: 'auto',
            marginBottom: '1rem',
            fontFamily: 'monospace'
          }}
        >
          #!/bin/bash /usr/lib/x86_64-linux-gnu/libexec/org_kde_powerdevil &
          qdbus local.org_kde_powerdevil
          /org/kde/Solid/PowerManagement/Actions/PowerProfile setProfile
          performance #older hardware: use lower base-resolution (f.e. 1920x1080
          here) for more fps #kscreen-doctor output.DP-#.mode.# #kscreen-doctor
          output.DP-#.scale.# env GDK_BACKEND=wayland gamescope -w 1920 -h 1080
          -f -Y -R --RT --force-grab-cursor --prefer-vk-device --adaptive-sync
          --sharpness 15 -- /opt/Heroic/heroic --ozone-platform=x11
          --enable-features=UseOzonePlatform,WaylandWindowDecorations
        </pre>

        <ul
          style={{
            marginLeft: '2rem',
            marginBottom: '1.5rem',
            listStyle: 'none'
          }}
        >
          <li style={{ marginBottom: '0.5rem' }}>
            {' '}
            {
              "Hint 1: 'env'-line, if you want 720p for fps reasons, use '-w 1280 -h 720' (or something else)"
            }
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            {
              "Hint 2: 'env'-line, for better compatability (f.e. if you want to start other electron-based apps through hgl) you could append '--use-angle=vulkan'"
            }
          </li>
          <li>
            {
              "Hint 3: 'env'-line, '--force-grab-cursor' / --prefer-vk-device needs a relatively new gamescope binary, '--force-grab-cursor' is needed if you 1. use ozone though wayland 2. use antimicrox 3. want to control a hgl-started electron-based-app through antimicrox"
            }
          </li>
        </ul>

        <h3>gamescoped hgl & gamemode (& NICE-capability)</h3>

        <p style={{ marginBottom: '1rem' }}>
          for using gamescope properly with gamemode (and a NICE-capable
          kernel), just simply
          <code
            style={{
              padding: '5px 4px',
              borderRadius: '4px',
              fontFamily: 'monospace',
              display: 'block',
              margin: '0.5rem 0'
            }}
          >
            sudo setcap 'CAP_SYS_NICE=eip' /usr/games/gamescope
          </code>
        </p>

        <h3>gamescoped hgl & firejail</h3>

        <p style={{ marginBottom: '1rem' }}>
          just put in your firejail-code into the line, f.e. (simplified)
          <code
            style={{
              padding: '5px 4px',
              borderRadius: '4px',
              fontFamily: 'monospace',
              display: 'block',
              margin: '0.5rem 0'
            }}
          >
            gamescope -f -- firejail --noprofile --/opt/Heroic/heroic
          </code>
        </p>

        <ul
          style={{
            marginLeft: '2rem',
            marginBottom: '1.5rem',
            listStyle: 'none'
          }}
        >
          <li>
            Hint: Heroic and apps started through it sometimes need a lot of
            'caps', you have to manually sort them out if you want to set --caps
            for firejail (benefit: not all steam needs are needed here)
          </li>
        </ul>
      </div>
    )
  },
  {
    section: 'Linux, macOS, and Steam Deck',
    title: 'Steam Deck',
    content: (
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          lineHeight: '1.6'
        }}
      >
        <h2 style={{ marginTop: '30px' }}>Table of Contents</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ margin: '5px 0' }}>
            <a
              href="#usage"
              style={{ color: '#0366d6', textDecoration: 'none' }}
            >
              Usage
            </a>
          </li>
          <li style={{ margin: '5px 0' }}>
            <a
              href="#how-to-install"
              style={{ color: '#0366d6', textDecoration: 'none' }}
            >
              How to Install Heroic Games Launcher
            </a>
            <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li style={{ margin: '5px 0' }}>
                <a
                  href="#flatpak"
                  style={{ color: '#0366d6', textDecoration: 'none' }}
                >
                  Flatpak (Recommended)
                </a>
                <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                  <li style={{ margin: '5px 0' }}>
                    <a
                      href="#flatpak-permissions"
                      style={{ color: '#0366d6', textDecoration: 'none' }}
                    >
                      Flatpak Permissions
                    </a>
                  </li>
                </ul>
              </li>
              <li style={{ margin: '5px 0' }}>
                <a
                  href="#appimage"
                  style={{ color: '#0366d6', textDecoration: 'none' }}
                >
                  AppImage
                </a>
                <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                  <li style={{ margin: '5px 0' }}>
                    <a
                      href="#game-mode"
                      style={{ color: '#0366d6', textDecoration: 'none' }}
                    >
                      Game Mode
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li style={{ margin: '5px 0' }}>
            <a
              href="#add-to-steam"
              style={{ color: '#0366d6', textDecoration: 'none' }}
            >
              How to Add Heroic Games to Steam/Game Mode
            </a>
            <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li style={{ margin: '5px 0' }}>
                <a
                  href="#manual"
                  style={{ color: '#0366d6', textDecoration: 'none' }}
                >
                  Manual
                </a>
              </li>
              <li style={{ margin: '5px 0' }}>
                <a
                  href="#automatic"
                  style={{ color: '#0366d6', textDecoration: 'none' }}
                >
                  Automatic
                </a>
              </li>
            </ul>
          </li>
          <li style={{ margin: '5px 0' }}>
            <a href="#hdr" style={{ color: '#0366d6', textDecoration: 'none' }}>
              HDR
            </a>
          </li>
          <li style={{ margin: '5px 0' }}>
            <a
              href="#common-issues"
              style={{ color: '#0366d6', textDecoration: 'none' }}
            >
              Common Issues
            </a>
          </li>
        </ul>

        <section id="usage" style={{ marginTop: '40px' }}>
          <h2>Usage</h2>
          <p style={{ marginBottom: '20px' }}>
            It is intended to install and configure games from desktop mode
            only. Running Heroic itself through Game Mode is not supported and
            you may encounter issues doing so.
          </p>
          <p style={{ marginBottom: '20px' }}>
            The proper way to use Heroic with the Steam Deck is to open Heroic
            in desktop mode, install and update games from there. You may need
            to play games at least once in desktop mode to confirm that they are
            functioning properly and in the case where a game requires user
            interaction on first launch, such as associating your Epic account
            with the game via a web browser pop up.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Once a game is installed, you can add it to steam through the 3 dot
            menu on the game page, or by selecting "auto add to steam" from the
            heroic settings on the side bar.
          </p>
        </section>

        <section id="how-to-install" style={{ marginTop: '40px' }}>
          <h2>How to Install Heroic Games Launcher</h2>

          <div id="flatpak" style={{ marginTop: '30px' }}>
            <h3>Flatpak (Recommended)</h3>
            <p style={{ marginBottom: '20px' }}>
              To install Heroic Games Launcher using the Flatpak, follow the
              below steps. The Flatpak is the recommended packaging method to
              use Heroic Games Launcher on the Steam Deck.
            </p>
            <ol style={{ paddingLeft: '20px' }}>
              <li style={{ margin: '10px 0' }}>
                Switch to <strong>Desktop mode</strong>.
              </li>
              <li style={{ margin: '10px 0' }}>
                Open the app store (Discover).
              </li>
              <li style={{ margin: '10px 0' }}>Search for "Heroic".</li>
              <li style={{ margin: '10px 0' }}>
                There should be a result for Heroic Games Launcher. Click
                install.
              </li>
              <li style={{ margin: '10px 0' }}>
                You should now be able to launch Heroic like any other
                application on your Steam Deck!
              </li>
            </ol>
          </div>

          <div id="flatpak-permissions" style={{ marginTop: '30px' }}>
            <h4>Flatpak Permissions</h4>
            <p style={{ marginBottom: '20px' }}>
              Purpose: Give permissions to SD Card, other partitions, external
              drives, etc.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Flatpak's containerization while intended for increased security
              does limit Heroic's permissions to several system's features and
              folders. It is necessary to give extra permissions to Heroic.
            </p>

            <div
              style={{
                padding: '20px',
                borderRadius: '5px',
                marginBottom: '20px'
              }}
            >
              <h5>If you are using KDE (includes the Steam Deck):</h5>
              <ol style={{ paddingLeft: '20px' }}>
                <li style={{ margin: '10px 0' }}>Open the `System Settings`</li>
                <li style={{ margin: '10px 0' }}>
                  On the left-hand side, click `Applications` under the
                  `Personalization` section
                </li>
                <li style={{ margin: '10px 0' }}>
                  On the left-hand side, click `Flatpak Permission Settings`
                </li>
                <li style={{ margin: '10px 0' }}>
                  In the list of applications, locate Heroic Games Launcher and
                  click it to open the permissions menu.
                </li>
                <li style={{ margin: '10px 0' }}>
                  On the right-hand side under the `Permissions` menu, locate
                  the `Filesystem Access` section.
                </li>
                <li style={{ margin: '10px 0' }}>
                  Click `Add New` and add your preferred path.
                </li>
                <li style={{ margin: '10px 0' }}>
                  When finished, set it to `read/write` and click `OK`
                </li>
                <li style={{ margin: '10px 0' }}>
                  Restart Heroic Games Launcher.
                </li>
              </ol>
            </div>
          </div>

          <div id="appimage" style={{ marginTop: '30px' }}>
            <h3>AppImage</h3>
            <p style={{ marginBottom: '20px' }}>
              To install Heroic Games Launcher using the AppImage, follow the
              below steps.
            </p>
            <ol style={{ paddingLeft: '20px' }}>
              <li style={{ margin: '10px 0' }}>Switch to Desktop Mode.</li>
              <li style={{ margin: '10px 0' }}>
                Open the Heroic "Releases" page,{' '}
                <a
                  href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases"
                  style={{ color: '#0366d6' }}
                >
                  https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases
                </a>
              </li>
              <li style={{ margin: '10px 0' }}>
                Download the `Heroic-*.*.*.AppImage` file
              </li>
              <li style={{ margin: '10px 0' }}>
                Move the newly downloaded AppImage to the
                `/home/deck/Applications` folder
              </li>
              <li style={{ margin: '10px 0' }}>
                Right click the AppImage, click `Properties`, `Permissions`,
                check `Is Executable`
              </li>
              <li style={{ margin: '10px 0' }}>
                Double click the AppImage to open Heroic.
              </li>
            </ol>
          </div>
        </section>

        <section id="common-issues" style={{ marginTop: '40px' }}>
          <h2>Common Issues</h2>

          <div style={{ marginTop: '20px' }}>
            <h3>Mangohud does not work</h3>
            <p style={{ marginBottom: '20px' }}>
              Check if you have installed the Flatpak version of Mangodhud:
              `flatpak install org.freedesktop.Platform.VulkanLayer.MangoHud`
            </p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3>Gamescope not available</h3>
            <p style={{ marginBottom: '20px' }}>
              Check if you have installed the Flatpak version of Gamescope:
              `flatpak install org.freedesktop.Platform.VulkanLayer.gamescope`
            </p>
            <p style={{ marginBottom: '20px' }}>
              If you are on a Steam Deck, the Flatpak version of Gamescope must
              match the natively installed version. If these versions do not
              match, you may experience increased crashing in other Flatpaks.
            </p>
          </div>
        </section>
      </div>
    )
  }
]

const DocumentationContentContainer = ({
  content
}: {
  content: contentType
}) => {
  return (
    <div className="container">
      <h1>{content.section}</h1>
      <h1>{content.title}</h1>
      <div>{content.content}</div>
    </div>
  )
}

const DocumentationNavBar = () => {
  return (
    <div className="documentation-nav">
      <div className="nav-container">
        <ul>
          <ul>
            <h3>Home</h3>
          </ul>
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
              <a href="#">Glossary</a>
            </li>
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
      <div className="toggle-container">
        <input type="checkbox" className="nav-toggler" />
      </div>
    </div>
  )
}

const Documentation: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Documentation</title>
        <meta
          name="description"
          content="An Open Source Epic, GOG and Amazon Prime Games Launcher"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DocumentationNavBar />
      <DocumentationContentContainer content={contents[7]} />
    </div>
  )
}

export default Documentation
