<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lembaga</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
    @include('components.header', [
    'user' => $user,
    'add' => $user ? 'lembaga-form-create' : '',
    'text' => $user ? 'Tambah Lembaga' : ''
    ])

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Nama Lembaga</th>
                <th scope="col">Alamat Kantor</th>
            </tr>
        </thead>
        <tbody>
            @if(empty($content))
            @foreach($content as $item)
            <tr>
                <td>
                    <div class="container-sm"
                        onclick="window.location.href='{{ route('lembaga-show', ['id' => $item->id]) }}'">
                        <p>{{ $item->name }}</p>
                        <p>{{ $item->singkatan }}</p>
                    </div>
                </td>
                <td>{{ $item->alamat}}</td>
            </tr>
            @endforeach
            @else
            <tr>
                <td colspan="2">Kosong</td>
            </tr>
            @endif
        </tbody>
    </table>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
</body>

</html>