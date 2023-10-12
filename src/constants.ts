/* eslint-disable max-lines */
export const systemCoreMap: Record<string, string> = {
  gb: 'mgba',
  gba: 'mgba',
  gbc: 'mgba',
  megadrive: 'genesis_plus_gx',
  nes: 'fceumm',
  snes: 'snes9x',
}

export const coreInfoMap: Record<string, { corename: string; cheats?: true; savestate?: true; supportsNoGame?: true }> =
  {
    '81': {
      corename: '81',
      savestate: true,
    },
    '2048': {
      corename: '2048',
      savestate: true,
      supportsNoGame: true,
    },
    '3dengine': {
      corename: '3DEngine',
    },
    '4do': {
      corename: '4DO',
      savestate: true,
    },
    a5200: {
      corename: 'a5200',
      savestate: true,
    },
    advanced_tests: {
      corename: 'Advanced Test',
      supportsNoGame: true,
    },
    ardens: {
      corename: 'Ardens',
      savestate: true,
    },
    arduous: {
      corename: 'Arduous',
    },
    atari800: {
      corename: 'Atari800',
      savestate: true,
    },
    bk: {
      corename: 'bk',
      savestate: true,
    },
    blastem: {
      corename: 'BlastEm',
      savestate: true,
    },
    bluemsx: {
      corename: 'blueMSX',
      savestate: true,
    },
    bnes: {
      corename: 'bnes/higan',
      savestate: true,
    },
    boom3: {
      corename: 'boom3',
    },
    boom3_xp: {
      corename: 'boom3_xp',
    },
    bsnes_cplusplus98: {
      cheats: true,
      corename: 'bsnes C++98 (v085)',
      savestate: true,
    },
    bsnes_hd_beta: {
      corename: 'bsnes-hd beta',
      savestate: true,
    },
    bsnes: {
      corename: 'bsnes',
      savestate: true,
    },
    bsnes_mercury_accuracy: {
      cheats: true,
      corename: 'bsnes-mercury Accuracy',
      savestate: true,
    },
    bsnes_mercury_balanced: {
      cheats: true,
      corename: 'bsnes-mercury Balanced',
      savestate: true,
    },
    bsnes_mercury_performance: {
      cheats: true,
      corename: 'bsnes-mercury Performance',
      savestate: true,
    },
    bsnes2014_accuracy: {
      cheats: true,
      corename: 'bsnes 2014 Accuracy',
      savestate: true,
    },
    bsnes2014_balanced: {
      cheats: true,
      corename: 'bsnes 2014 Balanced',
      savestate: true,
    },
    bsnes2014_performance: {
      cheats: true,
      corename: 'bsnes 2014 Performance',
      savestate: true,
    },
    cannonball: {
      corename: 'Cannonball',
      supportsNoGame: true,
    },
    cap32: {
      corename: 'Caprice32',
      savestate: true,
      supportsNoGame: true,
    },
    cdi2015: {
      corename: 'Philips CDi 2015',
    },
    chailove: {
      cheats: true,
      corename: 'ChaiLove',
      savestate: true,
    },
    chimerasnes: {
      cheats: true,
      corename: 'ChimeraSNES',
      savestate: true,
    },
    citra_canary: {
      corename: 'Citra Canary/Experimental',
    },
    citra: {
      corename: 'Citra',
      savestate: true,
    },
    citra2018: {
      corename: 'Citra 2018',
    },
    craft: {
      corename: 'Craft',
      supportsNoGame: true,
    },
    crocods: {
      corename: 'CrocoDS',
      savestate: true,
    },
    cruzes: {
      corename: 'Cruzes',
      supportsNoGame: true,
    },
    daphne: {
      corename: 'Daphne',
    },
    desmume: {
      cheats: true,
      corename: 'DeSmuME',
      savestate: true,
    },
    desmume2015: {
      cheats: true,
      corename: 'DeSmuME 2015',
      savestate: true,
    },
    dinothawr: {
      corename: 'Dinothawr',
      supportsNoGame: true,
    },
    directxbox: {
      corename: 'DirectXBox',
    },
    dirksimple: {
      corename: 'DirkSimple',
      savestate: true,
    },
    dolphin_launcher: {
      corename: 'Dolphin Launcher',
      supportsNoGame: true,
    },
    dolphin: {
      corename: 'Dolphin',
      savestate: true,
    },
    dosbox_core: {
      corename: 'DOSBox-core',
      supportsNoGame: true,
    },
    dosbox: {
      corename: 'DOSBox',
      supportsNoGame: true,
    },
    dosbox_pure: {
      cheats: true,
      corename: 'DOSBox-pure',
      savestate: true,
      supportsNoGame: true,
    },
    dosbox_svn_ce: {
      corename: 'DOSBox-SVN CE',
      supportsNoGame: true,
    },
    dosbox_svn: {
      corename: 'DOSBox-SVN',
      supportsNoGame: true,
    },
    duckstation: {
      corename: 'DuckStation',
      savestate: true,
    },
    easyrpg: {
      corename: 'EasyRPG Player',
    },
    ecwolf: {
      corename: 'ECWolf',
      savestate: true,
    },
    emuscv: {
      corename: 'EmuSCV',
      supportsNoGame: true,
    },
    emux_chip8: {
      corename: 'Emux CHIP-8',
    },
    emux_gb: {
      corename: 'Emux GB',
    },
    emux_nes: {
      corename: 'Emux NES',
    },
    emux_sms: {
      corename: 'Emux SMS',
    },
    ep128emu_core: {
      cheats: true,
      corename: 'ep128emu-core',
      savestate: true,
      supportsNoGame: true,
    },
    fake08: {
      corename: 'FAKE-08',
      savestate: true,
    },
    fbalpha2012_cps1: {
      corename: 'FB Alpha 2012 CPS-1',
      savestate: true,
    },
    fbalpha2012_cps2: {
      corename: 'FB Alpha 2012 CPS-2',
      savestate: true,
    },
    fbalpha2012_cps3: {
      corename: 'FB Alpha 2012 CPS-3',
      savestate: true,
    },
    fbalpha2012: {
      corename: 'FB Alpha 2012',
      savestate: true,
    },
    fbalpha2012_neogeo: {
      corename: 'FB Alpha 2012 Neo Geo',
      savestate: true,
    },
    fbneo: {
      cheats: true,
      corename: 'FinalBurn Neo',
      savestate: true,
    },
    fceumm: {
      cheats: true,
      corename: 'FCEUmm',
      savestate: true,
    },
    ffmpeg: {
      corename: 'FFmpeg',
    },
    fixgb: {
      corename: 'fixGB',
    },
    fixnes: {
      corename: 'fixNES',
    },
    flycast_gles2: {
      corename: 'Flycast GLES2',
      savestate: true,
    },
    flycast: {
      corename: 'Flycast',
      savestate: true,
    },
    fmsx: {
      corename: 'fMSX',
    },
    freechaf: {
      corename: 'FreeChaF',
    },
    freeintv: {
      corename: 'FreeIntv',
    },
    freej2me: {
      corename: 'FreeJ2ME',
    },
    frodo: {
      corename: 'Frodo',
    },
    fsuae: {
      corename: 'FS-UAE',
    },
    fuse: {
      corename: 'Fuse',
    },
    galaksija: {
      corename: 'galaksija',
      supportsNoGame: true,
    },
    gambatte: {
      corename: 'Gambatte',
      savestate: true,
    },
    gearboy: {
      corename: 'Gearboy',
    },
    gearcoleco: {
      corename: 'Gearcoleco',
    },
    gearsystem: {
      corename: 'Gearsystem',
    },
    genesis_plus_gx: {
      cheats: true,
      corename: 'Genesis Plus GX',
      savestate: true,
    },
    genesis_plus_gx_wide: {
      cheats: true,
      corename: 'Genesis Plus GX Wide',
      savestate: true,
    },
    gme: {
      corename: 'Game Music Emu',
    },
    gong: {
      corename: 'Gong',
      savestate: true,
      supportsNoGame: true,
    },
    gpsp: {
      corename: 'gpSP',
      savestate: true,
    },
    gw: {
      corename: 'GW',
    },
    handy: {
      corename: 'Handy',
      savestate: true,
    },
    hatari: {
      corename: 'Hatari',
      savestate: true,
    },
    hbmame: {
      corename: 'HBMAME (Git)',
    },
    higan_sfc_balanced: {
      corename: 'nSide (Super Famicom Balanced)',
      savestate: true,
    },
    higan_sfc: {
      corename: 'nSide (Super Famicom Accuracy)',
      savestate: true,
    },
    imageviewer: {
      corename: 'Imageviewer',
    },
    ishiiruka: {
      corename: 'Ishiiruka',
      savestate: true,
    },
    jaxe: {
      corename: 'JAXE',
    },
    jumpnbump: {
      corename: 'jumpnbump',
    },
    kronos: {
      cheats: true,
      corename: 'Kronos',
      savestate: true,
    },
    lowresnx: {
      corename: 'lowresnx',
    },
    lutro: {
      corename: 'Lutro',
    },
    mame: {
      corename: 'MAME',
      savestate: true,
    },
    mame2000: {
      corename: 'MAME 2000 (0.37b5)',
      savestate: true,
    },
    mame2003: {
      corename: 'MAME 2003 (0.78)',
      savestate: true,
    },
    mame2003_midway: {
      corename: 'MAME 2003 Midway (0.78)',
      savestate: true,
    },
    mame2003_plus: {
      corename: 'MAME 2003-Plus',
      savestate: true,
    },
    mame2009: {
      corename: 'MAME 2009 (0.135u4)',
    },
    mame2010: {
      corename: 'MAME 2010 (0.139)',
    },
    mame2015: {
      corename: 'MAME 2015 (0.160)',
    },
    mame2016: {
      corename: 'MAME 2016 (0.174)',
    },
    mamearcade: {
      corename: 'MAME (Git)',
    },
    mamemess: {
      corename: 'MESS (Git)',
      savestate: true,
    },
    mednafen_gba: {
      corename: 'Beetle GBA',
    },
    mednafen_lynx: {
      corename: 'Beetle Lynx',
    },
    mednafen_ngp: {
      corename: 'Beetle NeoPop',
      savestate: true,
    },
    mednafen_pce_fast: {
      corename: 'Beetle PCE Fast',
      savestate: true,
    },
    mednafen_pce: {
      corename: 'Beetle PCE',
      savestate: true,
    },
    mednafen_pcfx: {
      corename: 'Beetle PC-FX',
    },
    mednafen_psx_hw: {
      cheats: true,
      corename: 'Beetle PSX HW',
      savestate: true,
    },
    mednafen_psx: {
      cheats: true,
      corename: 'Beetle PSX',
      savestate: true,
    },
    mednafen_saturn: {
      cheats: true,
      corename: 'Beetle Saturn',
      savestate: true,
    },
    mednafen_snes: {
      corename: 'Beetle bsnes',
      savestate: true,
    },
    mednafen_supafaust: {
      cheats: true,
      corename: 'Beetle Supafaust',
      savestate: true,
    },
    mednafen_supergrafx: {
      cheats: true,
      corename: 'Beetle SuperGrafx',
      savestate: true,
    },
    mednafen_vb: {
      corename: 'Beetle VB',
    },
    mednafen_wswan: {
      corename: 'Beetle WonderSwan',
      savestate: true,
    },
    melonds: {
      corename: 'melonDS',
    },
    mesen: {
      cheats: true,
      corename: 'Mesen',
      savestate: true,
    },
    'mesen-s': {
      corename: 'Mesen-S',
    },
    mess2015: {
      corename: 'MESS 2015 (0.160)',
    },
    meteor: {
      corename: 'Meteor',
    },
    mgba: {
      cheats: true,
      corename: 'mGBA',
      savestate: true,
    },
    minivmac: {
      corename: 'MinivmacII',
    },
    mojozork: {
      corename: 'mojozork',
      savestate: true,
    },
    moonlight: {
      corename: 'Moonlight',
      supportsNoGame: true,
    },
    mpv: {
      corename: 'MPV',
    },
    mrboom: {
      corename: 'Mr.Boom',
      savestate: true,
      supportsNoGame: true,
    },
    mu: {
      corename: 'Mu',
      supportsNoGame: true,
    },
    mupen64plus_next_develop: {
      cheats: true,
      corename: 'Mupen64Plus-Next',
      savestate: true,
    },
    mupen64plus_next_gles2: {
      cheats: true,
      corename: 'Mupen64Plus-Next',
      savestate: true,
    },
    mupen64plus_next_gles3: {
      cheats: true,
      corename: 'Mupen64Plus-Next',
      savestate: true,
    },
    mupen64plus_next: {
      cheats: true,
      corename: 'Mupen64Plus-Next',
      savestate: true,
    },
    nekop2: {
      corename: 'Neko Project II',
      savestate: true,
    },
    neocd: {
      corename: 'NeoCD',
    },
    nes: {
      corename: 'nes',
      savestate: true,
    },
    nestopia: {
      cheats: true,
      corename: 'Nestopia',
      savestate: true,
    },
    np2kai: {
      corename: 'Neko Project II Kai',
      savestate: true,
    },
    numero: {
      corename: 'Numero',
      savestate: true,
      supportsNoGame: true,
    },
    nxengine: {
      corename: 'NXEngine',
      supportsNoGame: true,
    },
    o2em: {
      corename: 'O2EM',
      savestate: true,
    },
    oberon: {
      corename: 'Oberon',
    },
    openlara: {
      corename: 'OpenLara',
    },
    opentyrian: {
      corename: 'OpenTyrian',
      supportsNoGame: true,
    },
    opera: {
      corename: 'Opera',
      savestate: true,
      supportsNoGame: true,
    },
    parallel_n64_debug: {
      corename: 'ParaLLEl (Debug)',
      savestate: true,
    },
    parallel_n64: {
      corename: 'ParaLLEl N64',
      savestate: true,
    },
    pascal_pong: {
      corename: 'PascalPong',
      supportsNoGame: true,
    },
    pcem: {
      corename: 'PCem',
      supportsNoGame: true,
    },
    pcsx_rearmed_interpreter: {
      cheats: true,
      corename: 'PCSX ReARMed [Interpreter]',
      savestate: true,
    },
    pcsx_rearmed: {
      cheats: true,
      corename: 'PCSX-ReARMed',
      savestate: true,
    },
    pcsx_rearmed_neon: {
      cheats: true,
      corename: 'PCSX ReARMed [NEON]',
      savestate: true,
    },
    pcsx1: {
      corename: 'PCSX1',
    },
    pcsx2: {
      corename: 'LRPS2',
      savestate: true,
    },
    picodrive: {
      cheats: true,
      corename: 'PicoDrive',
      savestate: true,
    },
    play: {
      corename: 'Play!',
      savestate: true,
    },
    pocketcdg: {
      corename: 'PocketCDG',
    },
    pokemini: {
      corename: 'PokeMini',
      savestate: true,
    },
    potator: {
      corename: 'Potator',
      savestate: true,
    },
    ppsspp: {
      corename: 'PPSSPP',
      savestate: true,
    },
    prboom: {
      cheats: true,
      corename: 'PrBoom',
      savestate: true,
    },
    prosystem: {
      corename: 'ProSystem',
      savestate: true,
    },
    puae: {
      cheats: true,
      corename: 'PUAE',
      savestate: true,
      supportsNoGame: true,
    },
    puae2021: {
      cheats: true,
      corename: 'PUAE 2021',
      savestate: true,
      supportsNoGame: true,
    },
    puzzlescript: {
      corename: 'puzzlescript',
      savestate: true,
    },
    px68k: {
      corename: 'PX68k',
      supportsNoGame: true,
    },
    quasi88: {
      cheats: true,
      corename: 'QUASI88',
      savestate: true,
      supportsNoGame: true,
    },
    quicknes: {
      corename: 'QuickNES',
      savestate: true,
    },
    race: {
      corename: 'RACE',
      savestate: true,
    },
    redbook: {
      corename: 'Redbook',
    },
    reminiscence: {
      corename: 'REminiscence',
      savestate: true,
    },
    remotejoy: {
      corename: 'RemoteJoy',
      supportsNoGame: true,
    },
    retro8: {
      corename: 'Retro8',
    },
    retrodream: {
      corename: 'RetroDream',
    },
    rustation: {
      corename: 'Rustation',
    },
    same_cdi: {
      corename: 'SAME CDi (Git)',
    },
    sameboy: {
      corename: 'SameBoy',
    },
    sameduck: {
      corename: 'SameDuck',
      savestate: true,
    },
    scummvm: {
      corename: 'ScummVM',
      supportsNoGame: true,
    },
    simcp: {
      corename: 'SimCoupe',
    },
    smsplus: {
      corename: 'SMS Plus GX',
    },
    snes9x: {
      cheats: true,
      corename: 'Snes9x',
      savestate: true,
    },
    snes9x2002: {
      cheats: true,
      corename: 'Snes9x 2002',
      savestate: true,
    },
    snes9x2005: {
      cheats: true,
      corename: 'Snes9x 2005',
      savestate: true,
    },
    snes9x2005_plus: {
      cheats: true,
      corename: 'Snes9x 2005 Plus',
      savestate: true,
    },
    snes9x2010: {
      cheats: true,
      corename: 'Snes9x 2010',
      savestate: true,
    },
    squirreljme: {
      corename: 'SquirrelJME',
      supportsNoGame: true,
    },
    stella: {
      corename: 'Stella',
      savestate: true,
    },
    stella2014: {
      corename: 'Stella 2014',
      savestate: true,
    },
    stonesoup: {
      corename: 'Dungeon Crawl Stone Soup',
    },
    superbroswar: {
      corename: 'superbroswar',
    },
    swanstation: {
      corename: 'SwanStation',
      savestate: true,
    },
    tempgba: {
      corename: 'TempGBA',
    },
    test: {
      corename: 'Test',
      supportsNoGame: true,
    },
    test_netplay: {
      corename: 'netplay-test',
      supportsNoGame: true,
    },
    testaudio_callback: {
      corename: 'TestAudio Callback',
      supportsNoGame: true,
    },
    testaudio_no_callback: {
      corename: 'TestAudio NoCallback',
      supportsNoGame: true,
    },
    testaudio_playback_wav: {
      corename: 'TestAudio Playback Wav',
      supportsNoGame: true,
    },
    testgl_compute_shaders: {
      corename: 'TestGL ComputeShaders',
      supportsNoGame: true,
    },
    testgl_ff: {
      corename: 'TestGL (FF)',
      supportsNoGame: true,
    },
    testgl: {
      corename: 'TestGL',
      supportsNoGame: true,
    },
    testinput_buttontest: {
      corename: 'Button Test',
      supportsNoGame: true,
    },
    testretroluxury: {
      corename: 'Test RetroLuxury',
      supportsNoGame: true,
    },
    testsw: {
      corename: 'TestSW',
      supportsNoGame: true,
    },
    testsw_vram: {
      corename: 'TestSW VRAM',
      supportsNoGame: true,
    },
    testvulkan_async_compute: {
      corename: 'TestVulkan AsyncCompute',
      supportsNoGame: true,
    },
    testvulkan: {
      corename: 'TestVulkan',
      supportsNoGame: true,
    },
    tgbdual: {
      corename: 'TGB Dual',
      savestate: true,
    },
    theodore: {
      corename: 'theodore',
      savestate: true,
      supportsNoGame: true,
    },
    thepowdertoy: {
      corename: 'ThePowderToy',
      savestate: true,
      supportsNoGame: true,
    },
    tic80: {
      cheats: true,
      corename: 'TIC-80',
      savestate: true,
    },
    tyrquake: {
      cheats: true,
      corename: 'TyrQuake',
    },
    uae4arm: {
      corename: 'UAE4ARM',
      savestate: true,
    },
    ume2015: {
      corename: 'UME 2015 (0.160)',
    },
    uw8: {
      corename: 'MicroW8',
      savestate: true,
    },
    uzem: {
      corename: 'uzem',
      savestate: true,
    },
    vaporspec: {
      corename: 'VaporSpec',
      savestate: true,
    },
    vba_next: {
      corename: 'VBA Next',
      savestate: true,
    },
    vbam: {
      cheats: true,
      corename: 'VBA-M',
      savestate: true,
    },
    vecx: {
      corename: 'vecx',
      savestate: true,
    },
    vemulator: {
      corename: 'VeMUlator',
    },
    vice_x128: {
      cheats: true,
      corename: 'VICE x128',
      savestate: true,
      supportsNoGame: true,
    },
    vice_x64: {
      cheats: true,
      corename: 'VICE x64',
      savestate: true,
      supportsNoGame: true,
    },
    vice_x64dtv: {
      cheats: true,
      corename: 'VICE x64dtv',
      savestate: true,
      supportsNoGame: true,
    },
    vice_x64sc: {
      cheats: true,
      corename: 'VICE x64sc',
      savestate: true,
      supportsNoGame: true,
    },
    vice_xcbm2: {
      cheats: true,
      corename: 'VICE xcbm2',
      savestate: true,
      supportsNoGame: true,
    },
    vice_xcbm5x0: {
      cheats: true,
      corename: 'VICE xcbm5x0',
      savestate: true,
      supportsNoGame: true,
    },
    vice_xpet: {
      cheats: true,
      corename: 'VICE xpet',
      savestate: true,
      supportsNoGame: true,
    },
    vice_xplus4: {
      cheats: true,
      corename: 'VICE xplus4',
      savestate: true,
      supportsNoGame: true,
    },
    vice_xscpu64: {
      cheats: true,
      corename: 'VICE xscpu64',
      savestate: true,
      supportsNoGame: true,
    },
    vice_xvic: {
      cheats: true,
      corename: 'VICE xvic',
      savestate: true,
      supportsNoGame: true,
    },
    vircon32: {
      corename: 'Vircon32',
      supportsNoGame: true,
    },
    virtualjaguar: {
      corename: 'Virtual Jaguar',
    },
    virtualxt: {
      corename: 'virtualxt',
    },
    vitaquake2: {
      corename: 'vitaQuake 2',
    },
    'vitaquake2-rogue': {
      corename: 'vitaQuake 2 [Rogue]',
    },
    'vitaquake2-xatrix': {
      corename: 'vitaQuake 2 [Xatrix]',
    },
    'vitaquake2-zaero': {
      corename: 'vitaQuake 2 [Zaero]',
    },
    vitaquake3: {
      corename: 'vitaQuake 3',
    },
    vitavoyager: {
      corename: 'vitaVoyager',
    },
    wasm4: {
      corename: 'WASM-4',
      savestate: true,
    },
    x1: {
      corename: 'x1',
    },
    x64sdl: {
      corename: 'VICE SDL',
    },
    xrick: {
      corename: 'XRick',
      supportsNoGame: true,
    },
    yabasanshiro: {
      cheats: true,
      corename: 'YabaSanshiro',
      savestate: true,
    },
    yabause: {
      cheats: true,
      corename: 'Yabause',
      savestate: true,
    },
  }
/* eslint-enable */
