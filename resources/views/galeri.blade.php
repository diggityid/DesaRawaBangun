<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pegawai Desa Rawa </title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
    @include('components.header', ['user' => $user, 'add' => $user ? 'galeri-form-create' : '', 'text' => 'Tambah'])

    <div class="d-flex justify-content-around">
        @foreach($content as $item)
        <div class="card mb-3">
            <img src="{{ asset('storage/' . $item->images)}}" class="card-img-top"style="max-width: 540px;" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ $item->title ?? null }}</h5>
                @if($user)
                    <a class="btn btn-primary" href="{{ route('galeri-form-edit', ['id' => $item->id]) }}">Ubah</a>
                    <form action="{{ route('galeri-delete', ['id' => $item->id]) }}" method="post">
                        @csrf
                        <button class="btn btn-danger" type="submit">Hapus</button>
                    </form>
                @endif
            </div>
        </div>
        @endforeach
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
</body>

</html>