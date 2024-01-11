<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tentang Desa</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
</head>

<body>
    @include('components.header', ['user' => $user, 'add' => $user ? 'about-form-create' : '', 'text' => 'Ubah'])

    <div class="container-md border rounded p-3">
        <form method="POST" action="{{ route('about-insert') }}">
            @csrf
            <div class="row mb-3">
                <label for="intro" class="col-sm-2 col-form-label">Tetang Desa</label>
                <div class="col-sm-10">
                    <textarea class="form-control @error('intro') is-invalid @enderror" id="intro" name="intro"
                        rows="3">{{ old('intro') ?? $content['intro']}}</textarea>
                    @error('intro')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="visi" class="col-sm-2 col-form-label">Visi Desa</label>
                <div class="col-sm-10">
                    <textarea class="form-control @error('visi') is-invalid @enderror" id="visi" name="visi"
                        rows="3">{{ old('visi') ?? $content['visi'] }}</textarea>
                    @error('visi')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="misi" class="col-sm-2 col-form-label">Misi Desa</label>
                <div class="col-sm-10">
                    <textarea class="form-control @error('misi') is-invalid @enderror" id="misi" name="misi"
                        rows="3">{{ old('misi') ?? $content['misi'] }}</textarea>
                    @error('misi')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <div class="row mb-3">
                <label for="history" class="col-sm-2 col-form-label">Sejarah Desa</label>
                <div class="col-sm-10">
                    <textarea class="form-control @error('history') is-invalid @enderror" id="history" name="history"
                        rows="3">{{ old('history') ?? $content['history'] }}</textarea>
                    @error('history')
                    <div class="alert alert-danger">{{ $message }}</div>
                    @enderror
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Ubah</button>
        </form>
    </div>

</body>

</html>