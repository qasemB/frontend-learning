document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', ()=>({
        users: [],
        pageUsers: [],
        isLoading: false,
        showAddModal: false,
        pageCount: 1,
        itemsCount: 4,
        currentPage: 1,
        getUsers(){
            this.isLoading = true
            axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                this.users = res.data
                this.pagination()
            }).finally(()=>{
                this.isLoading = false
            })
        },
        pagination(){
            this.pageCount = Math.ceil(this.users.length / this.itemsCount) // 10 / 4 = 3
            const start = (this.currentPage * this.itemsCount) - this.itemsCount  // 0
            const end = this.currentPage * this.itemsCount // 4
            this.pageUsers = this.users.slice(start,end)
        },
        nextPage(){
            this.currentPage++
            if (this.currentPage > this.pageCount) this.currentPage = this.pageCount            
            this.pagination()
        },
        prevPage(){
            this.currentPage--
            if (this.currentPage < 1) this.currentPage = 1     
            this.pagination()
        },
        handleChangeItemsCount(value){
            this.currentPage = 1
            if (value < 1) this.itemsCount = 1     
            if (value > this.users.length) this.itemsCount = this.users.length
        }
    }))
})