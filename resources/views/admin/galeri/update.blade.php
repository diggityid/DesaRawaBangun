<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Update Galeri</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
</head>

<body>
    @include('components.header', ['user' => $user, 'add' => $user ? 'galeri-form-create' : '', 'text' => 'Tambah'])


    <div class="container-md border rounded p-3">
        <form method="post" action="{{ route('galeri-update', ['id' => $content[0]->id]) }}" enctype="multipart/form-data">
            @csrf
            <div class="row mb-3">
                <label for="title" class="col-sm-2 col-form-label">Nama</label>
                <div class="col-sm-10">
                    <input class="form-control @error('title') is-invalid @enderror" type="text" name="title" id="title"
                        value="{{ old('title') ?? $content[0]->title }}">
                    @error('title')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="images" class="col-sm-2 col-form-label">Masukan Foto</label>
                <div class="col-sm-10">
                    <img class="visually-hidden" src="{{ asset('storage/' . $content[0]->images) }}" name='oldImage' id="oldImage" alt="...">
                    <input type="hidden" name="oldImage" id="oldImage" value="{{ $content[0]->images }}">
                    <input class="form-control @error('images') is-invalid @enderror" type="file"
                        id="images" name="images">
                    @error('images')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Update Data</button>
        </form>
    </div>
</body>

</html>