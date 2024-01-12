<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ubah Pengumuman</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
    @include('components.header', ['user' => $user,
    'add' => $user ? 'pengumuman-form-create' : '',
    'text' => $user ? 'Buat' : ''])

    <div class="container-md border rounded p-3">
        <form method="post" action="{{ route('pengumuman-update', ['id' => $content[0]->id ]) }}"
            enctype="multipart/form-data">
            @csrf
            <div class="row mb-3">
                <label for="title" class="col-sm-2 col-form-label">Nama Pengumuman</label>
                <div class="col-sm-10">
                    <input class="form-control @error('title') is-invalid @enderror" type="text" name="title" id="title"
                        value="{{ old('title') ?? $content[0]->title }}">
                    @error('title')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="images" class="col-sm-2 col-form-label">Masukan Gambar</label>
                <div class="col-sm-10">
                    <input class="form-control @error('images') is-invalid @enderror" type="file" id="images"
                        name="images">
                    @error('images')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="detail" class="col-sm-2 col-form-label">Detail Kegiatan</label>
                <div class="col-sm-10">
                    <textarea class="form-control @error('detail') is-invalid @enderror" id="detail" name="detail"
                        rows="3">{{ old('detail') ?? $content[0]->detail }}</textarea>
                    @error('detail')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Masukan Data</button>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
</body>

</html>