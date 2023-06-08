function convertToWord() {
    const fileInput = document.getElementById('pdfFile');
    const file = fileInput.files[0];
  
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      fetch('/convert', {
        method: 'POST',
        body: formData
      })
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'converted.docx';
          a.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error:', error));
    }
  }
  