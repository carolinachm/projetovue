<!--HTML-->
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Pokedex</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <RouterLink class="nav-link" to="/">Primeira Geração</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/geracao2">Segunda Geração</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/geracao3">Terceira Geração</RouterLink>
                </li>

            </ul>
        </div>
    </nav>
</template>



