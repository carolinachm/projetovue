<!--Script-->
<script setup>
    //Importação do ref
    import {ref} from 'vue';

    //Variavel
    let nome = ref('Aline')
    //função para alterar o nome
    function alterarNome(){
        nome.value = 'Carolina'
    }
    //função para retornar a medica do aluno
    function media(nota1, nota2){
        return (nota1 +nota2)/2;
    }
    //função para retornar a situação do aluno
    function situacao(media){
        let situacaoAluno = '';
        if (media>=7) {
            situacaoAluno = 'Aprovado(a)';
        } else if(media>=5){
            situacaoAluno = 'Em exame';
        }else{
            situacaoAluno = 'Reprovado(a)';
        }
        return situacaoAluno;
    }
    
    
</script>