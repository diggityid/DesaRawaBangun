<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tentang Desa Rawa Bangun</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
    @include('components.header', ['user' => $user, 'add' => $user ? 'about-form-create' : '', 'text' => 'Ubah'])

    <h1>Tentang Desa Rawa Bangun</h1><br>
    <p>{{ $content['intro'] ?? '' }}</p>
    <hr>
    <h1>Visi & Misi</h1>
    <h3>Visi</h3>
    <p style="white-space: pre-wrap;">{{ $content['visi'] ?? '' }}</p>

    <h3>Misi</h3>
    <p style="white-space: pre-wrap;">{{ $content['misi'] ?? '' }}</p>

    <hr>
    <h1>Sejarah Desa Rawa Bangun</h1><br>
    <p>{{ $content['history'] ?? '' }}</p>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
</body>

</html>