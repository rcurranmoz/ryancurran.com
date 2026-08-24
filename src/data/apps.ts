export interface AppEntry {
  slug: string;
  name: string;
  tagline: string;
  platform: string;
  description: string;
  icon: string;
  status?: string;
  links: { label: string; href: string }[];
  privacy: { updated: string; html: string };
}

export const apps: AppEntry[] = [
  {
    slug: 'buildwatch',
    name: 'BuildWatch',
    tagline: 'Firefox CI on your phone',
    platform: 'iOS',
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
    slug: 'crumb',
    name: 'Crumb',
    tagline: "Don't give a crumb",
    platform: 'Firefox',
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
    slug: 'timefold',
    name: 'Timefold',
    tagline: 'On This Day',
    platform: 'iOS',
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
];
