(function() {
    const nextButtons = document.querySelectorAll('.btn-next');
    const prevButtons = document.querySelectorAll('.btn-prev');
    const addClassButtons = document.querySelectorAll('.btn-add-class');
    const addLessonButton = document.querySelector('.btn-add-lesson');
    const form = document.getElementById('categoryForm');
    let currentStep = 0;


    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            changeStep(1);
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            changeStep(-1);
        });
    });

    addClassButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            addClass(event.target.closest('.lesson-item'));
        });
    });

    addLessonButton.addEventListener('click', () => {
        addLesson();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Formulario enviado!');
    });

    function changeStep(step) {
        const steps = document.querySelectorAll('.step-content');
        const progressSteps = document.querySelectorAll('.progress-bar .step');
        steps[currentStep].classList.remove('active');
        progressSteps[currentStep].classList.remove('active');
        currentStep += step;
        steps[currentStep].classList.add('active');
        progressSteps[currentStep].classList.add('active');
    }

    function addClass(lessonItem) {
        const classContainer = lessonItem.querySelector('.class-container');
        const classCount = classContainer.querySelectorAll('.class-item').length + 1;
        const lessonIndex = Array.from(lessonItem.parentNode.children).indexOf(lessonItem) + 1;
        const classItem = document.createElement('div');
        classItem.classList.add('class-item');
        classItem.innerHTML = `
            <h3>Clase ${classCount}</h3>
            <label for="className${lessonIndex}_${classCount}">Ingrese el nombre de la clase</label>
            <input type="text" id="className${lessonIndex}_${classCount}" name="className${lessonIndex}_${classCount}" required>
            <label for="classVideo${lessonIndex}_${classCount}">URL del video</label>
            <input type="url" id="classVideo${lessonIndex}_${classCount}" name="classVideo${lessonIndex}_${classCount}" required>
            <label for="classImage${lessonIndex}_${classCount}">Imagen del clip</label>
            <input type="file" id="classImage${lessonIndex}_${classCount}" name="classImage${lessonIndex}_${classCount}" accept="image/*">
            <label for="classNotes${lessonIndex}_${classCount}">Anotaciones</label>
            <textarea id="classNotes${lessonIndex}_${classCount}" name="classNotes${lessonIndex}_${classCount}" rows="2"></textarea>
            <label for="classRepo${lessonIndex}_${classCount}">Repositorio</label>
            <input type="url" id="classRepo${lessonIndex}_${classCount}" name="classRepo${lessonIndex}_${classCount}">
            <button type="button" class="btn-remove-class">Eliminar clase</button>
        `;
        classContainer.appendChild(classItem);

        classItem.querySelector('.btn-remove-class').addEventListener('click', () => {
            classContainer.removeChild(classItem);
        });
    }

    function addLesson() {
        const lessonContainer = document.querySelector('.lesson-container');
        const lessonCount = lessonContainer.querySelectorAll('.lesson-item').length + 1;
        const lessonItem = document.createElement('div');
        lessonItem.classList.add('lesson-item');
        lessonItem.innerHTML = `
            <h2>Lección ${lessonCount}</h2>
            <label for="lessonName${lessonCount}">Ingrese el nombre de la lección</label>
            <input type="text" id="lessonName${lessonCount}" name="lessonName${lessonCount}" required>
            <label for="lessonDescription${lessonCount}">Descripción</label>
            <textarea id="lessonDescription${lessonCount}" name="lessonDescription${lessonCount}" rows="4" required></textarea>
            <div class="class-container">
                <div class="class-item">
                    <h3>Clase 1</h3>
                    <label for="className${lessonCount}_1">Ingrese el nombre de la clase</label>
                    <input type="text" id="className${lessonCount}_1" name="className${lessonCount}_1" required>
                    <label for="classVideo${lessonCount}_1">URL del video</label>
                    <input type="url" id="classVideo${lessonCount}_1" name="classVideo${lessonCount}_1" required>
                    <label for="classImage${lessonCount}_1">Imagen del clip</label>
                    <input type="file" id="classImage${lessonCount}_1" name="classImage${lessonCount}_1" accept="image/*">
                    <label for="classNotes${lessonCount}_1">Anotaciones</label>
                    <textarea id="classNotes${lessonCount}_1" name="classNotes${lessonCount}_1" rows="2"></textarea>
                    <label for="classRepo${lessonCount}_1">Repositorio</label>
                    <input type="url" id="classRepo${lessonCount}_1" name="classRepo${lessonCount}_1">
                </div>
            </div>
            <button type="button" class="btn-add-class">Agregar clase</button>
            <button type="button" class="btn-remove-lesson">Eliminar lección</button>
        `;
        lessonContainer.appendChild(lessonItem);

        lessonItem.querySelector('.btn-add-class').addEventListener('click', () => {
            addClass(lessonItem);
        });

        lessonItem.querySelector('.btn-remove-lesson').addEventListener('click', () => {
            lessonContainer.removeChild(lessonItem);
        });
    }   

})();
