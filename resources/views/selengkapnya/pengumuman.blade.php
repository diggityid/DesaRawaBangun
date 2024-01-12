<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $content[0]->title }}</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
    @include('components.header', [
    'user' => $user,
    'add' => $user ? 'pengumuman-form-create' : '',
    'text' => $user ? 'Buat Pengumuman' : ''])

    <div class="container-md border rounded p-3">
        <div class="row mb-3">
            <div class="col-sm-10">
                <p>{{ $content[0]->title }}</p>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-10">
                <p>{{ $content[0]->created_at }}</p>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-10">
                <img src="{{ asset('storage/' . $content[0]->images) }}" alt="...">
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-10">
                <p>{{ $content[0]->detail }}</p>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-10">
                <a class="btn btn-primary"
                    href="{{ route('pengumuman-form-edit', ['id' => $content[0]->id]) }}">Ubah</a>
            </div>
            <form action="{{ route('pengumuman-delete', ['id' => $content[0]->id]) }}" method="post">
                @csrf
                <button class="btn btn-danger" type="submit">Hapus</button>
            </form>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
</body>

</html>