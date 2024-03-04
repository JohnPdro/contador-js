// Define o contador inicial
let count = 0;

// Seleciona o valor dos botões 
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) { // Para cada btn dentro da variavel btns faça...
    btn.addEventListener('click', function(e){ // Cria um evento de clique em todos as classes com btn
        const styles = e.currentTarget.classList;  // Se refere ao botão que foi clicado salvando sua class dentro do styles
        if(styles.contains('subtracao')){ // Caso a class salva em styles seja subtracao faça...
            count--;
        }
        else if(styles.contains('adicionar')){ // Caso a class salva em styles seja adicionar faça...
            count++;
        }
        else{ // Caso a class salva em styles seja resetar faça...
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "#222"
        }
        value.textContent = count;
    });
});
