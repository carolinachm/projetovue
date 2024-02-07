//importações
import { describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import Aluno from '../Aluno.vue'

//Inicializa o teste
describe('Aluno', () => {
    //verificar o valor da variavel nome
    it('Deve verificar o valor da variavel nome', ()=>{
        //Obter o componente Aluno
        const componente = mount(Aluno);
        //chamar a função que altera o nome
        componente.vm.alterarNome();
        //realizar o teste
        expect(componente.vm.nome).toBe('Carolina')
    })
    //Verificar a media
    it('Verificar a media', () => {
        //Obter o componente
        const componente = mount(Aluno);
       
        //realizar o teste
        expect(componente.vm.media(7,9)).toBe(8);
       
    })
    it('Verificar a situação', () => {

        //Obter o componente
        const componente = mount(Aluno);
       
        //realizar o teste
        expect(componente.vm.situacao(8)).toBe('Aprovado(a)');

    })
    //Veridicar a media a situação 
    it('//Veridicar a media a situação do aluno', ()=>{
        //obter componente
        const componente = mount(Aluno);
        //obter a media
        const media = componente.vm.media(8,10);
        //obter a situação
        const situacao = componente.vm.situacao(media)
        //verificação
        expect(situacao).toBe('Aprovado(a)')
    })
})
