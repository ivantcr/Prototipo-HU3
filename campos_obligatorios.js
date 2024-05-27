document.addEventListener("DOMContentLoaded", function() {
    const categoryNameInput = document.getElementById('categoryName');
    const categoryDescriptionInput = document.getElementById('categoryDescription');
    const lessonNameInput = document.getElementById('lessonName1');
    const lessonDescriptionInput = document.getElementById('lessonDescription1');
    const classInput = document.getElementById('className1_1');
    const videoUrlInput = document.getElementById('classVideo1_1');
    const codingExampleInput = document.getElementById('classRepo1_1');
    const nextButtonStep1 = document.querySelector('.step-content.step-1 .btn-next');
    const nextButtonStep2 = document.querySelector('.step-content.step-2 .btn-next');

    function validateStep1() {
        const categoryName = categoryNameInput.value.trim();
        const categoryDescription = categoryDescriptionInput.value.trim();

        if (categoryName !== '' && categoryDescription !== '') {
            nextButtonStep1.disabled = false;
        } else {
            nextButtonStep1.disabled = true;
        }
    }

    function validateStep2() {
        const lessonName = lessonNameInput.value.trim();
        const lessonDescription = lessonDescriptionInput.value.trim();
        const className = classInput.value.trim();
        const videoUrl = videoUrlInput.value.trim();
        const codingExample = codingExampleInput.value.trim();

        if (lessonName !== '' && lessonDescription !== '' && className !== '' && videoUrl !== '' && codingExample !== '') {
            nextButtonStep2.disabled = false;
        } else {
            nextButtonStep2.disabled = true;
        }
    }

    categoryNameInput.addEventListener('input', validateStep1);
    categoryDescriptionInput.addEventListener('input', validateStep1);
    lessonNameInput.addEventListener('input', validateStep2);
    lessonDescriptionInput.addEventListener('input', validateStep2);
    classInput.addEventListener('input', validateStep2);
    videoUrlInput.addEventListener('input', validateStep2);
    codingExampleInput.addEventListener('input', validateStep2);

    validateStep1();
    validateStep2();
});
