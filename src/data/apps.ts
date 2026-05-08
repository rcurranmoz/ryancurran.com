export interface AppEntry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  status?: string;
  links: { label: string; href: string }[];
  privacy: { updated: string; html: string };
}

export const apps: AppEntry[] = [
  {
    slug: 'timefold',
    name: 'Timefold',
    tagline: 'On This Day',
    description:
      'Privacy-first iOS app that surfaces photos taken on this date in past years from your Apple Photos library. No accounts. No analytics. Everything runs on-device.',
    icon: '/timefold-icon.png',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/timefold-on-this-day/id6758055406' },
      { label: 'GitHub', href: 'https://github.com/rcurranmoz/Timefold' },
    ],
    privacy: {
      updated: 'January 2026',
      html: `
<p>Timefold is designed with privacy as a core principle. The app does not require accounts, does not use analytics or advertising, and does not send your data to external servers.</p>

<h3>Information We Do Not Collect</h3>
<p>Timefold does not collect, store, transmit, or sell any personal data. Specifically:</p>
<ul>
  <li>No user accounts are created</li>
  <li>No analytics or tracking frameworks are used</li>
  <li>No advertising or marketing SDKs are included</li>
  <li>No data is transmitted to external servers</li>
</ul>

<h3>Photos Access</h3>
<p>Timefold accesses your Apple Photos library locally on your device using Apple's Photos framework.</p>
<ul>
  <li>Photos are processed entirely on-device</li>
  <li>Photos are never uploaded, synced, or backed up to any servers operated by the developer</li>
  <li>Any sharing actions are initiated explicitly by you using Apple's system share sheet</li>
</ul>
<p>Timefold works only with Apple Photos at this time. No third-party photo services (such as Google Photos, Facebook, or cloud storage providers) are accessed.</p>

<h3>Optional Actions</h3>
<p>If you choose to:</p>
<ul>
  <li>Share a photo, it is shared using Apple's built-in sharing tools</li>
  <li>Delete a photo, the deletion is performed directly within your Photos library using Apple's APIs</li>
</ul>
<p>These actions are always user-initiated.</p>

<h3>Data Storage</h3>
<p>Timefold does not maintain user databases or cloud storage. Any app preferences are stored locally on your device using standard iOS storage mechanisms.</p>

<h3>Children's Privacy</h3>
<p>Timefold does not knowingly collect any data from children. Since no data is collected, stored, or transmitted, there is no personal information to manage or disclose.</p>

<h3>Changes to This Policy</h3>
<p>If Timefold's functionality changes in a way that affects privacy, this policy will be updated accordingly.</p>

<h3>Contact</h3>
<p>If you have questions about this privacy policy or Timefold, <a href="mailto:ryanpcurran@icloud.com">contact me</a>.</p>
      `.trim(),
    },
  },
  {
    slug: 'timefold-android',
    name: 'Timefold for Android',
    tagline: 'On This Day · Android port',
    description:
      "Android port of Timefold built with Kotlin + Jetpack Compose. Same privacy promise, same on-device-only design — surfaces photos and videos taken on this date in past years from your device's MediaStore. Includes a Glance home-screen widget and optional local daily reminders.",
    icon: '/timefold-android-icon.png',
    status: 'BETA',
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.ryancurran.timefold' },
      { label: 'Join Beta', href: 'https://play.google.com/apps/testing/com.ryancurran.timefold' },
      { label: 'GitHub', href: 'https://github.com/rcurranmoz/Timefold-Android' },
    ],
    privacy: {
      updated: 'May 7, 2026',
      html: `
<p>Timefold is built around a single privacy promise: <strong>nothing about you or your photos ever leaves your device.</strong></p>

<h3>What Timefold Accesses</h3>
<p>When you grant permission, Timefold reads photo and video metadata from your device's media library (<code>READ_MEDIA_IMAGES</code>, <code>READ_MEDIA_VIDEO</code>) so it can find media taken on this day in past years. It also reads the underlying image and video files in order to display them inside the app, generate thumbnails, and — if you choose — render a branded share image. That is the entire scope of data access.</p>

<h3>What Timefold Collects</h3>
<p><strong>None.</strong> Timefold has no servers. The app does not contain analytics SDKs, telemetry, crash reporting, or any other data-collection mechanism. There is no account system, no login, and no user identifier. The developer has no way of knowing who you are, what photos you have, what days you've opened the app, or whether you've used it at all.</p>

<h3>What Timefold Transmits</h3>
<p><strong>None.</strong> Timefold does not connect to the internet. It has no network code other than what your device's operating system uses to load the photo library and what Android's standard share sheet uses when you explicitly tap Share. The app itself opens no sockets, makes no HTTP requests, and contacts no servers — including ours, because we don't run any.</p>

<h3>What Timefold Shares With Third Parties</h3>
<p><strong>None.</strong> We have no third parties.</p>

<h3>Permissions Explained</h3>
<ul>
  <li><code>READ_MEDIA_IMAGES</code>, <code>READ_MEDIA_VIDEO</code> — find photos and videos taken on this day in past years from your local library.</li>
  <li><code>READ_MEDIA_VISUAL_USER_SELECTED</code> — honor Android 14+ "Selected photos only" mode if you grant partial access.</li>
  <li><code>POST_NOTIFICATIONS</code> — show the optional "Daily Reminder" if you enable it in Settings. Notifications are scheduled and rendered locally; no server is involved.</li>
</ul>
<p>Permissions can be revoked at any time in <strong>Settings → Apps → Timefold → Permissions</strong>.</p>

<h3>Notifications</h3>
<p>If you enable Daily Reminders, Timefold uses the Android <code>WorkManager</code> system to schedule local notifications up to 30 days in advance, only on days when your photo library has enough memories. These notifications run entirely on your device. There is no notification server.</p>

<h3>Children's Privacy</h3>
<p>Timefold is not directed at children under 13. The app does not knowingly collect data from anyone, regardless of age — see "What Timefold Collects" above.</p>

<h3>Open Source</h3>
<p>Source code: <a href="https://github.com/rcurranmoz/Timefold-Android" target="_blank" rel="noopener noreferrer">github.com/rcurranmoz/Timefold-Android</a>. You are encouraged to review it and verify these claims yourself.</p>

<h3>Contact</h3>
<p>Questions: <a href="mailto:ryanpcurran@icloud.com">ryanpcurran@icloud.com</a>.</p>
      `.trim(),
    },
  },
  {
    slug: 'crumb',
    name: 'Crumb',
    tagline: "Don't give a crumb",
    description:
      'Firefox extension that blocks cookie-consent banners. Declarative-only, zero telemetry, ~25 lines of runtime. MIT-licensed and reproducible from source.',
    icon: '/crumb-icon.png',
    links: [
      { label: 'Add-ons', href: 'https://addons.mozilla.org/firefox/addon/crumb/' },
      { label: 'GitHub', href: 'https://github.com/rcurranmoz/crumb' },
    ],
    privacy: {
      updated: '2026-05-05',
      html: `
<p>Crumb is a content-blocking extension for Firefox. It does not collect, store, transmit, or share any data about you, your browsing, or your device.</p>

<h3>What Crumb does</h3>
<p>When you visit a web page, Crumb inserts a stylesheet that hides cookie-consent banners, and the browser's built-in <code>declarativeNetRequest</code> engine blocks a fixed list of consent-management scripts at the network layer. Both the stylesheet contents and the network rules are bundled with the extension and do not change at runtime.</p>

<h3>What Crumb does not do</h3>
<ul>
  <li>No telemetry, analytics, crash reporting, or usage metrics.</li>
  <li>No remote configuration or rule fetching after install.</li>
  <li>No reading or transmission of page content, form data, cookies, or browsing history.</li>
  <li>No background script and no persistent storage.</li>
  <li>No advertising or third-party SDKs.</li>
</ul>

<h3>Permissions</h3>
<p>Crumb requests two permissions, both used solely for the local blocking described above:</p>
<ul>
  <li><code>declarativeNetRequest</code> — to install the static block list.</li>
  <li><code>&lt;all_urls&gt;</code> host access — to inject the stylesheet on every page.</li>
</ul>
<p>Neither permission is used for data collection.</p>

<h3>Source code</h3>
<p>Crumb is open source under the MIT license. The full source — including every filter list and the build pipeline that produces the extension — lives at <a href="https://github.com/rcurranmoz/crumb" target="_blank" rel="noopener noreferrer">github.com/rcurranmoz/crumb</a>.</p>

<h3>Contact</h3>
<p>Issues or questions: <a href="https://github.com/rcurranmoz/crumb/issues" target="_blank" rel="noopener noreferrer">github.com/rcurranmoz/crumb/issues</a>.</p>
      `.trim(),
    },
  },
  {
    slug: 'buildwatch',
    name: 'BuildWatch',
    tagline: 'Firefox CI on your phone',
    description:
      'Native iOS app for Mozilla engineers — sheriffs, on-call, and devs — to monitor Firefox CI build status without opening a laptop. Live push lists, per-platform results, retrigger actions, and grouped failure summaries pulled from TreeHerder, TreeStatus, Taskcluster, and Bugzilla.',
    icon: '/buildwatch-icon.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/mozilla-platform-ops/BuildWatch' },
    ],
    privacy: {
      updated: 'May 8, 2026',
      html: `
<p>BuildWatch is a thin client over Mozilla's public CI APIs. It does not run a backend, does not collect telemetry, and does not transmit data anywhere except to the Mozilla services it queries on your behalf.</p>

<h3>Information Stored On Your Device</h3>
<ul>
  <li>Your Mozilla / LDAP email address (optional — used only to filter the "My Pushes" tab)</li>
  <li>Your app preferences (default repository, tier visibility, notification opt-in)</li>
  <li>The set of pushes you've marked as watched</li>
</ul>
<p>All of the above is stored locally on your device using <code>UserDefaults</code>. None of it is transmitted to any server operated by the developer, because the developer does not operate any servers.</p>

<h3>Network Requests</h3>
<p>BuildWatch communicates only with public Mozilla services:</p>
<ul>
  <li><a href="https://treeherder.mozilla.org" target="_blank" rel="noopener noreferrer">TreeHerder</a> — push list, job results, retrigger actions, text log errors</li>
  <li><a href="https://treestatus.prod.lando.prod.cloudops.mozgcp.net" target="_blank" rel="noopener noreferrer">TreeStatus</a> — open/closed/restricted state of Mozilla trees</li>
  <li><a href="https://firefox-ci-tc.services.mozilla.com" target="_blank" rel="noopener noreferrer">Taskcluster</a> — deep links to individual tasks</li>
  <li><a href="https://bugzilla.mozilla.org" target="_blank" rel="noopener noreferrer">Bugzilla</a> — opening bug links found in commit messages</li>
</ul>
<p>These services have their own privacy and data-handling policies, governed by Mozilla. See <a href="https://www.mozilla.org/privacy/" target="_blank" rel="noopener noreferrer">mozilla.org/privacy</a>.</p>

<h3>What BuildWatch Does Not Do</h3>
<ul>
  <li>No analytics, crash reporting, or behavior tracking</li>
  <li>No advertising or third-party SDKs</li>
  <li>No accounts created or managed by the developer</li>
  <li>No data sold or shared with third parties</li>
</ul>

<h3>Children's Privacy</h3>
<p>BuildWatch is a developer tool for adult engineers working on Firefox. It is not directed at children under 13 and does not knowingly collect data from anyone, regardless of age — see "Information Stored On Your Device" above.</p>

<h3>Source Code</h3>
<p>BuildWatch is open source under the MPL-2.0 license. Source: <a href="https://github.com/mozilla-platform-ops/BuildWatch" target="_blank" rel="noopener noreferrer">github.com/mozilla-platform-ops/BuildWatch</a>. You are encouraged to read it and verify these claims.</p>

<h3>Contact</h3>
<p>Questions or issues: <a href="mailto:ryanpcurran@icloud.com">contact me</a>.</p>
      `.trim(),
    },
  },
  {
    slug: 'moodring',
    name: 'MoodRing',
    tagline: 'Play What You Feel',
    description:
      'iOS app that turns a sentence about how you feel into an Apple Music playlist. Powered by Claude via a Cloudflare Worker proxy. No accounts, no tracking.',
    icon: '/moodring-icon.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/rcurranmoz/MoodRing' },
    ],
    privacy: {
      updated: 'January 2026',
      html: `
<p>MoodRing is designed with privacy as a core principle. The app uses AI to generate playlists but does not store your personal information or track your behavior.</p>

<h3>Information We Collect</h3>
<p>MoodRing collects minimal information necessary to function:</p>
<ul>
  <li>Your emotion descriptions are sent to our AI service (Anthropic's Claude API) to generate playlist recommendations</li>
  <li>These descriptions are processed in real-time and are not stored or logged by MoodRing</li>
  <li>No user accounts are created</li>
  <li>No personal identifiable information is collected</li>
</ul>
<p>MoodRing accesses your Apple Music library to create playlists.</p>
<ul>
  <li>Music library access is processed entirely on your device</li>
  <li>Playlists are created directly in your Apple Music library using Apple's MusicKit framework</li>
  <li>No music data or listening history is transmitted to our servers</li>
  <li>All Apple Music interactions use Apple's secure APIs</li>
</ul>

<h3>Information We Do Not Collect</h3>
<ul>
  <li>No analytics or tracking frameworks are used</li>
  <li>No advertising or marketing SDKs are included</li>
  <li>No browsing history, location data, or device identifiers</li>
  <li>No data is sold to third parties</li>
</ul>

<h3>Third-Party Services</h3>
<p>MoodRing uses the following third-party services:</p>
<ul>
  <li><strong>Anthropic Claude API</strong>: Your emotion descriptions are sent to Anthropic's AI service to generate music recommendations. Anthropic's privacy policy applies to this data processing. Visit <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer">anthropic.com/privacy</a> for details.</li>
  <li><strong>Apple MusicKit</strong>: Used to search Apple Music and create playlists. Apple's privacy policy applies. Visit <a href="https://www.apple.com/legal/privacy" target="_blank" rel="noopener noreferrer">apple.com/legal/privacy</a> for details.</li>
</ul>

<h3>Data Storage</h3>
<p>MoodRing does not maintain user databases or cloud storage. The app does not store your emotion descriptions or playlist history.</p>

<h3>Children's Privacy</h3>
<p>MoodRing does not knowingly collect data from children under 13. Since minimal data is collected and not stored, there is no personal information to manage or disclose.</p>

<h3>Required Permissions</h3>
<ul>
  <li><strong>Apple Music Library</strong>: Required to create and manage playlists</li>
  <li><strong>Internet Access</strong>: Required to communicate with AI service and Apple Music</li>
</ul>

<h3>Changes to This Policy</h3>
<p>If MoodRing's functionality changes in a way that affects privacy, this policy will be updated accordingly and users will be notified through an app update.</p>

<h3>Contact</h3>
<p>If you have questions about this privacy policy or MoodRing, <a href="mailto:ryanpcurran@icloud.com">contact me</a>.</p>
      `.trim(),
    },
  },
];
