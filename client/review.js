document.getElementById('para-1').addEventListener('mouseup', () => {
  const selection = window.getSelection().toString();
  if (selection) {
    const comment = prompt("Add your comment:");
    if (comment) {
      fetch('http://localhost:3000/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: selection, comment })
      })
      .then(res => res.json())
      .then(data => alert(data.message));
    }
  }
});