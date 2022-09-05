export default () => {
    const conteiner = document.createElement('article');
    const content = `
        <section id="registration">
            <h2>Formulário de cadastro de usuários</h2>
            <p>Para inserir usuários na lista, preencha os dados abaixo.</p>
            <hr>
            <div>
                <input type="text" id="name" placeholder="Nome Completo" required>
                <input type="email" id="email" placeholder="E-mail" required>
                <button type="button" id="btn">Cadastrar</button>
            </div>
        </section>
        
        <section id="list">
            <h2>Lista de usuários cadastrados</h2>
            <p>Abaixo, você pode ver os usuários registrados, podendo editá-los ou remové-los.</p>
            <hr>
            <table>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody id="table"></tbody>
            </table>
        </section>
    `;

    conteiner.innerHTML = content;
    return conteiner;
};