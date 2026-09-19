(async () => {
  const b64 = "SEE_FILE";
  const bin = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  const stream = new Blob([bin]).stream().pipeThrough(new DecompressionStream("gzip"));
  const text = await new Response(stream).text();
  (0, eval)(text);
})().catch((e) => {
  document.getElementById("screen").textContent = "Failed to boot pwsh: " + e;
});
