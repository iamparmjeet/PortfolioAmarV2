"use client";

export default function FileViewer() {
  async function fetchFile() {
    const res = await fetch(`/api/files/sign-url/`);
    const { url } = await res.json();
    const fileRes = await fetch(url);
    console.log("fileRes", fileRes);
    // Process fileRes (e.g., display an image or initiate a download)
  }
  fetchFile();

  return (
    <div>dd</div>
  );
}
// https://2ae5cd7d8957f255046bb1436958647b.r2.cloudflarestorage.com/amarjeet-portfolio/V1/
