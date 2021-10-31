new Vue({
    el: '#app',
    data: {
        newTarget: false,
        qd1: [{
            target: 'TEste1',
            descricao: 'testteststsetsetestsetsetetse',
            valorSelecionado: '',
            status: false
        },{
            target: 'Teste 2',
            descricao: 'errwettrstrete',
            valorSelecionado: '',
            status: false
        },{
            target: 'Teste 2',
            descricao: 'errwettrstrete',
            valorSelecionado: '',
            status: false
        }],
        qd2: [],
        qd3: [],
        qd4: [],
        tarefa: {
            nome: '',
            desc: '',
            valorSelecionado: '',
            status: false
        },
        status: [
            {qd: 1, classe: 'Decida Quando Fazer'},
            {qd: 2, classe: 'Faça Imediatamente'},
            {qd: 3, classe: 'Faça Mais Tarde'},
            {qd: 4, classe: 'Delegue Para Outra Pessoa'},
        ],

    },
    methods: {
        novaTarefa() {
            this.newTarget = true
        },
        adicionarNovaTarefa() {

            const order = {
                target: this.tarefa.nome,
                descricao: this.tarefa.desc,
                status: this.tarefa.status,
                valorSelecionado: '',
            }

            this.qd1.push(order)

            this.newTarget = false
            alert("Tarefa Adicionada!")
        },
        concluirTarefa() {
            console.log(event)
            this.qd1.delete()
        }
    }
})