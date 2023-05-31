<main>
        <div class="container">
            @forelse ($comics as $comics)
                {{$comics['title']}}<br>
            @empty

            @endforelse
           
        </div>
    </main>