<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Download Desa Rawa Bangun</title>
</head>

<body>
    @include('components.header', ['user' => $user, 'add' => $user ? 'download-form' : ''])


    <h3>Download</h3>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">File</th>
                <th scope="col">Type File</th>
                <th scope="col">Ukuran File</th>
                <th scope="col">Download</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td><button class="btn primary-btn">Download</button></td>
            </tr>
        </tbody>
    </table>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
</body>

</html>