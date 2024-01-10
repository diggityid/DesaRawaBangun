<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Pegawai</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
</head>

<body>
    @include('components.header', ['user' => $user, 'add' => $user ? 'pegawai-form' : ''])

    <h3>Pendidikan</h3>

    <div class="container-md border rounded p-3">
        <form method="post" action="{{ route('pegawai-insert') }}" enctype="multipart/form-data">
            @csrf
            <div class="row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Nama</label>
                <div class="col-sm-10">
                    <input class="form-control" type="text" name="name" id="name" value="{{ old('name') }}">
                    @error('name')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="image_profile" class="col-sm-2 col-form-label">Masukan Foto</label>
                <div class="col-sm-10">
                    <input class="form-control" type="file" id="image_profile" name="image_profile">
                    @error('image_profile')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="detail" class="col-sm-2 col-form-label">Deskripsi File</label>
                <div class="col-sm-10">
                    <input class="form-control" type="text" name="detail" id="detail" value="{{ old('detail') }}">
                    @error('detail')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Masukan Data</button>
        </form>
    </div>
</body>

</html>