async function test() {
  console.log("Fetching contact page...");
  const res = await fetch("https://percepta.sbs/contact");
  const text = await res.text();
  
  const match = text.match(/action(?:_id)?["']?\s*[:=]\s*["']([^"']+)["']/i) || text.match(/[a-zA-Z0-9_-]{30,}/g);
  
  console.log("Possible action IDs found:");
  if (match) {
    console.log(match.slice(0, 5));
  } else {
    console.log("No action ID found");
  }
}

test().catch(console.error);
