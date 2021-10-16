$(document).ready(function(){
    const pokemon_wrp = $('#pokemon-wrp');
    const pokemon_data = $('#pokemon-data');


    for(let i = 1; i < 152; i++){
        pokemon_wrp.append(`<img id=${i} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`)
    }

    const pokemon_imgs = $('img')
    //https://pokeapi.co/api/v2/pokemon/2/
    pokemon_imgs.click(function(){
        const pokemon_id = $(this).attr('id')
        $.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`, function(res) {
            // pokemon_data.children("h3").html(res.name)
            // pokemon_data.children("img").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon_id}.png`)
            // let types = ""
            // $.each(res.types, function(index, value){
            //     types += `<li>${value.type.name}</li>`
            // })
            // pokemon_data.children("ul").html(types)
            // $('#height').html(res.height)
            // $('#weight').html(res.weight)

            
            pokemon_data.css('display', 'block')
            pokemon_data.html(`<button id="close-data">x</button><img id=${pokemon_id} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon_id}.png"> <ul><li>${res.name}</li><li>${res.weight}</li> <li>${res.height}</li><li>${res.types[0].type.name}</li></ul>`)
            const close_btn = $('#close-data')
            close_btn.click(function(){
                pokemon_data.css('display', 'none')
            })
        }, "json");
    })


    // $('#close-btn').click(function(){
    //     pokemon_data.css('display', 'none')
    // })
});