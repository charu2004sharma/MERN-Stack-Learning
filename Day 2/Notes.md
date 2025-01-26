# Day 2: DNS Basics and HTTPS Implementation

 *DNS Basics*
- DNS (Domain Name System) acts as the "phonebook" of the internet, translating domain names (e.g., example.com) into IP addresses.
- Key DNS records:
  - *A Record:* Maps a domain to an IPv4 address.
  - *CNAME Record:* Alias for another domain.
  - *MX Record:* Directs email to a mail server.
  - *TXT Record:* Contains text information for verification or configuration.
- *DNS Resolution Process:*
  1. User types a domain into the browser.
  2. DNS translates it to an IP address using recursive and authoritative servers.
  3. The browser connects to the server to load the website.

*HTTPS Implementation*
1. *Why HTTPS?*
   - Protects user data with SSL/TLS encryption.
   - Ensures websites are authentic and secure.
   - Improves trust and visibility (SEO boost).

2. *Hands-On Practice:*
   - Explored the *Security* tab in Chrome DevTools to view:
     - SSL certificate details.
     - Encryption standards used by websites.
   - Checked padlock icons on various sites to verify HTTPS usage.

*Reflection*
- DNS concepts clarified how domains connect to servers.
- Understanding SSL certificates and DNS records was challenging at first but became clearer with examples.
