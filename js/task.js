"use strict"
$().ready(function () {
    let playList = [
        {
            author: "LED ZEPPELIN",
            song: "STAIRWAY TO HEAVEN"
        }, {
            author: "QUEEN",
            song: "BOHEMIAN RHAPSODY"
        }, {
            author: "LYNYRD SKYNYRD",
            song: "FREE BIRD"
        }, {
            author: "DEEP PURPLE",
            song: "SMOKE ON THE WATER"
        }, {
            author: "JIMI HENDRIX",
            song: "ALL ALONG THE WATCHTOWER"
        }, {
            author: "AC/DC",
            song: "BACK IN BLACK"
        }, {
            author: "QUEEN",
            song: "WE WILL ROCK YOU"
        }, {
            author: "METALLICA",
            song: "ENTER SANDMAN"
        }];

    let musicList = $(`<ol class="songList"></ol>`)
    $('body').append(musicList)
    showPlayList(playList, musicList, "songList__item")
    $('body').append(`<div class="modal"></div>`)

    $('.songList__info').click(function () {
        let $list = $(`<ol class="modal-list"></ol>`)
        $('.modal').append($list)
        $(this).parent().append(`<hr align="left" width="370" style= "margin: 0; position: absolute; top: 50%">`)
        showPlayList(playList, $list, "modal-list__item")
        $('.modal button').remove()
        $('.modal')
            .append(`<button class="modal__close">Close it</button>`)
            .addClass('modal-window')
    })
    $(document).on('click', '.modal__close', function () {
        $('div').removeClass('modal-window')
        $('.modal').html('')
    })

    function showPlayList(songs, list, className) {
        for (let song of songs) {
            let $song = $(`<li class= ${className} > ${song.author}. "${song.song}" <button class= "songList__info" > Show Full</button ></li> `)
            list.append($song)
        }
    }
})


