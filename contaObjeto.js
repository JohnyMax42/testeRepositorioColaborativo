let conta = {
    senha: 1234,
    agencia: 1234,
    nConta: 123456,
    titular: 'Max',
    tipo: 'PF',
    saldo: 1000,
    emprestimo:[],
    sacar: function(senha, valor){
        //verifica se o valor é maior que o saldo
        if(senha == conta.senha){
        if(conta.saldo >= valor){
            conta.saldo -= valor
            console.log(`saque realizado com sucesso`)
       }else{
        console.log('saldo insuficiente')
       }
    }
    else{
        console.log('senha incorreta')
    }
    },
    depositar: function(senha, valor){
        if(senha == conta.senha){
        conta.saldo += valor
        console.log(`foi depositado ${valor} reais`)
        }
        else{
            console.log('senha incorreta')
        }
    },
    consultarSaldo: function(senha){
        if(senha == conta.senha){
        console.log(`o saldo é de ${conta.saldo}`)
        }
        else{
            console.log('senha incorreta')
        }
    },
    fazerEmprestimo: function(senha, valor){
        if(senha == conta.senha){
            let qtdParcelas = 24
            let juros = 0.02
            let parcela = (valor/qtdParcelas)* (1 + juros)
            let infoEmprestimo = [valor, qtdParcelas, parcela, juros]
            conta.emprestimo.push(infoEmprestimo)
            conta.saldo += valor
            console.log(`emprestimo no valor de ${valor} reais concedido. o Saldo atual da conta é de ${conta.saldo}`)
        }
        else{
            console.log('senha digitada errada')
        }

    }
}