const btnUpload = document.querySelector('#upload');
const imageResult = document.querySelector('#image');
const filenameResult = document.querySelector('#filename');
const linkDownload = document.querySelector('#link');

btnUpload.addEventListener('click',e=>{
    e.preventDefault();

    const bucket = document.querySelector('#buckets').value;
    const file = document.querySelector('#file').files[0];

    const formData = new FormData();
    formData.append('bucket',bucket);
    formData.append('file',file);

    uploadFile(formData);
});

const uploadFile = (formData) => {

    fetch('upload',{
        method:'POST',
        body:formData
    })
        .then(response => response.json())
        .then(data => {

            imageResult.src = data.Location;
            filenameResult.value = data.key;
            linkDownload.href = data.Location;
        })
};

