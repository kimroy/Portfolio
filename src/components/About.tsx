const About = () => {
  const profileimg = require("../assets/profile.jpg");
  return (
    <div className="bg-custom-background-primary text-white p-2">
      {/* My information */}
      <div className="content-container">
        <a
          href="#"
          className="flex flex-col items-center border-2 rounded-lg shadow-md md:flex-row border-custom-background-accent dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className=" rounded md:h-full md:w-60 sm:h-100 sm:w-full"
            src={profileimg}
            alt=""
          ></img>
          <div className="flex flex-col justify-between p-6 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              About Me
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              nunc augue. Nulla facilisis turpis sed libero consectetur, eu
              gravida urna placerat. Etiam in molestie elit, sed tristique
              risus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nullam in ultrices enim, a
              tincidunt lacus. Suspendisse malesuada a sem eget elementum.
              Vestibulum tristique, odio eu pellentesque tincidunt, nibh nisi
              bibendum neque, sed mattis erat neque eu tellus. Pellentesque et
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              nunc augue. Nulla facilisis turpis sed libero consectetur, eu
              gravida urna placerat. Etiam in molestie elit, sed tristique
              risus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nullam in ultrices enim, a
              tincidunt lacus. Suspendisse malesuada a sem eget elementum.
              Vestibulum tristique, odio eu pellentesque tincidunt, nibh nisi
              bibendum neque, sed mattis erat neque eu tellus. Pellentesque et
            </p>
          </div>
        </a>
      </div>

      {/* Current tech stack */}
      <div className="content-container">
        <h1 className="text-2xl pb-6">Technical Skills</h1>
        <div className="grid grid-cols-2 gap-8 justify-between lg:grid-cols-4">
          <div className="tech-stack ">
            <svg viewBox="0 0 128 128" height="25" width="25">
              <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
              <path
                data-name="original"
                fill="#007acc"
                d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
              ></path>
            </svg>
            <p className="pl-2">TypeScript</p>
          </div>

          <div className="tech-stack">
            <svg viewBox="0 0 128 128" height="25" width="25">
              <linearGradient
                id="python-original-a"
                gradientUnits="userSpaceOnUse"
                x1="70.252"
                y1="1237.476"
                x2="170.659"
                y2="1151.089"
                gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
              >
                <stop offset="0" stop-color="#5A9FD4"></stop>
                <stop offset="1" stop-color="#306998"></stop>
              </linearGradient>
              <linearGradient
                id="python-original-b"
                gradientUnits="userSpaceOnUse"
                x1="209.474"
                y1="1098.811"
                x2="173.62"
                y2="1149.537"
                gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
              >
                <stop offset="0" stop-color="#FFD43B"></stop>
                <stop offset="1" stop-color="#FFE873"></stop>
              </linearGradient>
              <path
                fill="url(#python-original-a)"
                d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                transform="translate(0 10.26)"
              ></path>
              <path
                fill="url(#python-original-b)"
                d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                transform="translate(0 10.26)"
              ></path>
              <radialGradient
                id="python-original-c"
                cx="1825.678"
                cy="444.45"
                r="26.743"
                gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0"
                  stop-color="#B8B8B8"
                  stop-opacity=".498"
                ></stop>
                <stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop>
              </radialGradient>
              <path
                opacity=".444"
                fill="url(#python-original-c)"
                d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
              ></path>
            </svg>
            <p className="pl-2">Python</p>
          </div>

          <div className="tech-stack">
            <svg viewBox="0 0 128 128" height="25" width="25">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#3A4D54"
                d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"
              ></path>
              <path
                fill="#00AADA"
                d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"
              ></path>
              <path
                fill="#28B8EB"
                d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"
              ></path>
              <path
                fill="#028BB8"
                d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z"
              ></path>
              <path
                fill="#019BC6"
                d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#00ACD3"
                d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3-12h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#23C2EE"
                d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#00ACD3"
                d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#23C2EE"
                d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1 10.4H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#00ACD3"
                d="M62.2 41.5H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#23C2EE"
                d="M62.2 30.2H72V40h-9.8v-9.8zm.8.8h.8v8.1H63V31zm1.5 0h.8v8.1h-.8V31zm1.4 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#00ACD3"
                d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#D4EEF1"
                d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#3A4D54"
                d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"
              ></path>
              <path
                fill="#BFDBE0"
                d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8H56z"
              ></path>
              <path
                fill="#D4EEF1"
                d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"
              ></path>
            </svg>

            <p className="pl-2">Docker</p>
          </div>

          <div className="tech-stack">
            <svg viewBox="0 0 128 128" height="25" width="25">
              <path fill="none" d="M4.24 4.24h119.53v119.53H4.24z"></path>
              <path
                fill="#293138"
                d="M109.01 28.64L71.28 6.24c-2.25-1.33-4.77-2-7.28-2s-5.03.67-7.28 2.01l-37.74 22.4c-4.5 2.67-7.28 7.61-7.28 12.96v44.8c0 5.35 2.77 10.29 7.28 12.96l37.73 22.4c2.25 1.34 4.76 2 7.28 2 2.51 0 5.03-.67 7.28-2l37.74-22.4c4.5-2.67 7.28-7.62 7.28-12.96V41.6c0-5.34-2.77-10.29-7.28-12.96zM79.79 98.59l.06 3.22c0 .39-.25.83-.55.99l-1.91 1.1c-.3.15-.56-.03-.56-.42l-.03-3.17c-1.63.68-3.29.84-4.34.42-.2-.08-.29-.37-.21-.71l.69-2.91c.06-.23.18-.46.34-.6.06-.06.12-.1.18-.13.11-.06.22-.07.31-.03 1.14.38 2.59.2 3.99-.5 1.78-.9 2.97-2.72 2.95-4.52-.02-1.64-.9-2.31-3.05-2.33-2.74.01-5.3-.53-5.34-4.57-.03-3.32 1.69-6.78 4.43-8.96l-.03-3.25c0-.4.24-.84.55-1l1.85-1.18c.3-.15.56.04.56.43l.03 3.25c1.36-.54 2.54-.69 3.61-.44.23.06.34.38.24.75l-.72 2.88c-.06.22-.18.44-.33.58a.77.77 0 01-.19.14c-.1.05-.19.06-.28.05-.49-.11-1.65-.36-3.48.56-1.92.97-2.59 2.64-2.58 3.88.02 1.48.77 1.93 3.39 1.97 3.49.06 4.99 1.58 5.03 5.09.05 3.44-1.79 7.15-4.61 9.41zm26.34-60.5l-35.7 22.05c-4.45 2.6-7.73 5.52-7.74 10.89v43.99c0 3.21 1.3 5.29 3.29 5.9-.65.11-1.32.19-1.98.19-2.09 0-4.15-.57-5.96-1.64l-37.73-22.4c-3.69-2.19-5.98-6.28-5.98-10.67V41.6c0-4.39 2.29-8.48 5.98-10.67l37.74-22.4c1.81-1.07 3.87-1.64 5.96-1.64s4.15.57 5.96 1.64l37.74 22.4c3.11 1.85 5.21 5.04 5.8 8.63-1.27-2.67-4.09-3.39-7.38-1.47z"
              ></path>
              <path
                fill="#4FA847"
                d="M99.12 90.73l-9.4 5.62c-.25.15-.43.31-.43.61v2.46c0 .3.2.43.45.28l9.54-5.8c.25-.15.29-.42.29-.72v-2.17c0-.3-.2-.42-.45-.28z"
              ></path>
            </svg>

            <p className="pl-2">Bash</p>
          </div>

          <div className="tech-stack">
            <svg height="25" width="25" viewBox="0 0 128 128">
              <path
                fill="#F34F29"
                d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"
              ></path>
            </svg>
            <p className="pl-2">Git</p>
          </div>

          <div className="tech-stack">
            <svg height="25" width="25" viewBox="0 0 128 128">
              <path
                fill="#F0DB4F"
                d="M1.408 1.408h125.184v125.185H1.408z"
              ></path>
              <path
                fill="#323330"
                d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
              ></path>
            </svg>
            <p className="pl-2">Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
