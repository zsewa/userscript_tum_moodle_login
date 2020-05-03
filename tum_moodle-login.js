// ==UserScript==
// @name         TUM Moodle Login
// @version      1.0.1
// @description  Stay logged in on www.moodle.tum.de
// @author       Zeno Sewald <zsewa@outlook.de>
// @namespace    https://github.com/zsewa
// @homepageURL  https://github.com/zsewa/userscript_tum_moodle_login

// @match        https://www.moodle.tum.de/
// @match        https://www.moodle.tum.de/login/index.php

// @run-at       document-start
// @grant        none
// ==/UserScript==

function redirect() {
    window.location.replace("https://www.moodle.tum.de/auth/shibboleth/index.php");
}

(function() {
    'use strict';

    const url = window.location.href;

    if (url === "https://www.moodle.tum.de/login/index.php" || url === "https://www.moodle.tum.de/") {
        redirect();
    }
})();

