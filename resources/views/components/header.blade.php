@props(['user'])

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="{{ route('home') }}">Desa Rawa Bangun</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Profile Desa
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="{{ route('about') }}">Tentang Kami</a></li>
                        <li><a class="dropdown-item" href="#">Visi & Misi</a></li>
                        <li><a class="dropdown-item" href="#">Sejarah Desa</a></li>
                        <li><a class="dropdown-item" href="#">Geografis Desa</a></li>
                        <li><a class="dropdown-item" href="#">Demografis Desa</a></li>
                    </ul>
                </li>
            </ul>

            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Pemerintahan
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Stuktur Desa</a></li>
                        <li><a class="dropdown-item" href="{{ route('pegawai') }}">Perangkat Desa</a></li>
                        <li><a class="dropdown-item" href="#">Lembaga Desa</a></li>
                    </ul>
                </li>
            </ul>

            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Informasi Publik
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="{{ route('pengumuman' )}}">Pengumuman</a></li>
                        <li><a class="dropdown-item" href="#">Agenda Desa</a></li>
                        <li><a class="dropdown-item" href="{{ route('galeri') }}">Galeri Desa</a></li>
                        <li><a class="dropdown-item" href="#">Berita Desa</a></li>
                        <li><a class="dropdown-item" href="{{ route('download') }}">Download</a></li>
                    </ul>
                </li>
            </ul>


            @if($user)
            <div class="d-flex">
                <ul class="navbar-nav me-2">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ $user->name }}
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="{{ route('profile.edit')}}">Profile</a></li>
                            <li>
                                <form action="{{ route('logout') }}" method="POST">
                                    @csrf <!-- Tambahkan token CSRF untuk melindungi form -->
                                    <button class="dropdown-item" type="submit">Logout</button>
                                </form>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            @endif
        </div>
    </div>
</nav>