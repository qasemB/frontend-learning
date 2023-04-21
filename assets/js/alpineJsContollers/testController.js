document.addEventListener('alpine:init', () => {
    Alpine.data('testController', ()=>({
        testField: "test1",
    }))
})