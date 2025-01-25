# Day 4: DNS Queries and Caching  

*DNS Queries*  
1. *What is a DNS Query?*  
   - A DNS query is a request sent from a client (browser) to a DNS server to resolve a domain name into an IP address.  

2. *Types of DNS Queries:*  
   - *Recursive Query:*  
     - The DNS resolver performs all lookups and returns the final IP address to the client.  
   - *Iterative Query:*  
     - The DNS resolver returns a referral to the next server, and the client queries that server.  
   - *Non-Recursive Query:*  
     - The DNS resolver checks its own cache and immediately returns the result if available.  

3. *DNS Resolution Flow:*  
   - Client sends a query to the DNS resolver.  
   - The resolver communicates with root, TLD, and authoritative servers to find the IP address.  
   - The resolver caches the result for future queries.  

 *DNS Caching*  
1. *What is DNS Caching?*  
   - DNS caching stores DNS query results to speed up subsequent requests.  
   - Cached data can exist at different levels:  
     - *Browser Cache:* Stores DNS records locally in the user's browser.  
     - *Operating System Cache:* Cached by the OS for quick access.  
     - *DNS Resolver Cache:* Maintained by the recursive resolver.  

2. *Benefits of DNS Caching:*  
   - Reduces query latency.  
   - Decreases load on DNS servers.  
   - Improves overall browsing experience.  

3. *Time-To-Live (TTL):*  
   - Specifies how long a DNS record is cached before it expires.  

*Reflection*  
- Understanding recursive and iterative DNS queries helped clarify how domain names are resolved.  
- Observing DNS caching at different levels made the concept more practical.  
