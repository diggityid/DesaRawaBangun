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
    @include('components.header', ['user' => $user, 'add' => $user ? 'pegawai-form-create' : '', 'text' => 'Tambah'])

    <div class="d-flex justify-content-around">
        @foreach($content as $item)
        <div class="card mb-3" onclick="window.location.href='{{ route('pegawai', ['id' => $item->id]) }}'">
            <img src="{{ asset('storage/' . $item->images)}}" class="card-img-top"style="max-width: 540px;" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ $item->name ?? null }}</h5>
                <p class="card-text"></p>
                <p class="card-text"><small class="text-body-secondary">{{ $item->jabatan }}</small></p>
            </div>
        </div>
        @endforeach
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
</body>

</html>