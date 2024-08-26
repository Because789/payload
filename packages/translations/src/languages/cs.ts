import type { DefaultTranslationsObject, Language } from '../types.js'

export const csTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Účet',
    accountOfCurrentUser: 'Účet současného uživatele',
    accountVerified: 'Účet byl úspěšně ověřen.',
    alreadyActivated: 'Již aktivováno',
    alreadyLoggedIn: 'Již přihlášen',
    apiKey: 'API klíč',
    authenticated: 'Ověřený',
    backToLogin: 'Zpět na přihlášení',
    beginCreateFirstUser: 'Začněte vytvořením svého prvního uživatele.',
    changePassword: 'Změnit heslo',
    checkYourEmailForPasswordReset:
      'Zkontrolujte svůj email a najděte v něm odkaz, který vám umožní bezpečně resetovat vaše heslo.',
    confirmGeneration: 'Potvrdit generaci',
    confirmPassword: 'Potvrdit heslo',
    createFirstUser: 'Vytvořit prvního uživatele',
    emailNotValid: 'Zadaný email není platný',
    emailOrUsername: 'E-mail nebo Uživatelské jméno',
    emailSent: 'Email odeslán',
    emailVerified: 'E-mail úspěšně ověřen.',
    enableAPIKey: 'Povolit API klíč',
    failedToUnlock: 'Nepodařilo se odemknout',
    forceUnlock: 'Vynutit odemčení',
    forgotPassword: 'Zapomněli jste heslo?',
    forgotPasswordEmailInstructions:
      'Zadejte svůj email níže. Obdržíte email s instrukcemi, jak resetovat vaše heslo.',
    forgotPasswordQuestion: 'Zapomněli jste heslo?',
    forgotPasswordUsernameInstructions:
      'Zadejte níže své uživatelské jméno. Instrukce, jak obnovit vaše heslo, budou odeslány na e-mailovou adresu spojenou s vaším uživatelským jménem.',
    generate: 'Generovat',
    generateNewAPIKey: 'Generovat nový API klíč',
    generatingNewAPIKeyWillInvalidate:
      'Vytvoření nového API klíče <1>zneplatní</1> předchozí klíč. Opravdu chcete pokračovat?',
    lockUntil: 'Uzamknout do',
    logBackIn: 'Znovu se přihlásit',
    logOut: 'Odhlásit se',
    loggedIn: 'Abyste se mohli přihlásit s jiným uživatelem, nejdříve se <0>odhlaste</0>.',
    loggedInChangePassword: 'Pro změnu hesla přejděte do svého <0>účtu</0> a zde si heslo upravte.',
    loggedOutInactivity: 'Byli jste odhlášeni z důvodu neaktivity.',
    loggedOutSuccessfully: 'Byli jste úspěšně odhlášeni.',
    loggingOut: 'Odhlášení...',
    login: 'Přihlásit se',
    loginAttempts: 'Pokusy o přihlášení',
    loginUser: 'Přihlásit uživatele',
    loginWithAnotherUser:
      'Abyste se mohli přihlásit s jiným uživatelem, nejdříve se <0>odhlaste</0>.',
    logout: 'Odhlásit se',
    logoutSuccessful: 'Odhlášení úspěšné.',
    logoutUser: 'Odhlásit uživatele',
    newAPIKeyGenerated: 'Byl vygenerován nový API klíč.',
    newAccountCreated:
      'Pro přístup k <a href="{{serverURL}}">{{serverURL}}</a> byl pro vás vytvořen nový účet. Klepněte na následující odkaz nebo zkopírujte URL do svého prohlížeče pro ověření vašeho emailu: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Po ověření vašeho emailu se budete moci úspěšně přihlásit.',
    newPassword: 'Nové heslo',
    passed: 'Ověření prošlo',
    passwordResetSuccessfully: 'Heslo bylo úspěšně resetováno.',
    resetPassword: 'Resetovat heslo',
    resetPasswordExpiration: 'Expirace resetování hesla',
    resetPasswordToken: 'Token pro resetování hesla',
    resetYourPassword: 'Resetujte své heslo',
    stayLoggedIn: 'Zůstat přihlášen',
    successfullyRegisteredFirstUser: 'Úspěšně zaregistrován první uživatel.',
    successfullyUnlocked: 'Úspěšně odemčeno',
    tokenRefreshSuccessful: 'Obnovení tokenu úspěšné.',
    unableToVerify: 'Nepodařilo se ověřit',
    username: 'Uživatelské jméno',
    usernameNotValid: 'Poskytnuté uživatelské jméno není platné.',
    verified: 'Ověřeno',
    verifiedSuccessfully: 'Úspěšně ověřeno',
    verify: 'Ověřit',
    verifyUser: 'Ověřit uživatele',
    verifyYourEmail: 'Ověřte svůj email',
    youAreInactive:
      'Nějakou dobu jste nebyli aktivní a brzy budete automaticky odhlášeni z bezpečnostních důvodů. Chcete zůstat přihlášen?',
    youAreReceivingResetPassword:
      'Tento email obdržíte, protože jste (nebo někdo jiný) požádali o resetování hesla pro váš účet.',
    youDidNotRequestPassword:
      'Pokud jste o to nepožádali, ignorujte prosím tento e-mail a vaše heslo zůstane nezměněno.',
  },
  error: {
    accountAlreadyActivated: 'Tento účet již byl aktivován.',
    autosaving: 'Při automatickém ukládání tohoto dokumentu došlo k chybě.',
    correctInvalidFields: 'Opravte neplatná pole.',
    deletingFile: 'Při mazání souboru došlo k chybě.',
    deletingTitle:
      'Při mazání {{title}} došlo k chybě. Zkontrolujte své připojení a zkuste to znovu.',
    emailOrPasswordIncorrect: 'Zadaný email nebo heslo není správné.',
    followingFieldsInvalid_one: 'Následující pole je neplatné:',
    followingFieldsInvalid_other: 'Následující pole jsou neplatná:',
    incorrectCollection: 'Nesprávná kolekce',
    invalidFileType: 'Neplatný typ souboru',
    invalidFileTypeValue: 'Neplatný typ souboru: {{value}}',
    loadingDocument: 'Při načítání dokumentu s ID {{id}} došlo k chybě.',
    localesNotSaved_one: 'Následující lokalitu se nepodařilo uložit:',
    localesNotSaved_other: 'Následující lokality se nepodařilo uložit:',
    logoutFailed: 'Odhlášení se nezdařilo.',
    missingEmail: 'Chybějící email.',
    missingIDOfDocument: 'Chybějící ID dokumentu pro aktualizaci.',
    missingIDOfVersion: 'Chybějící ID verze.',
    missingRequiredData: 'Chybějící povinná data.',
    noFilesUploaded: 'Nebyly nahrány žádné soubory.',
    noMatchedField: 'Pro "{{label}}" nebylo nalezeno žádné odpovídající pole',
    noUser: 'Žádný uživatel',
    notAllowedToAccessPage: 'Nemáte povolení přistupovat k této stránce.',
    notAllowedToPerformAction: 'Nemáte povolení provádět tuto akci.',
    notFound: 'Požadovaný zdroj nebyl nalezen.',
    previewing: 'Při náhledu tohoto dokumentu došlo k chybě.',
    problemUploadingFile: 'Při nahrávání souboru došlo k chybě.',
    tokenInvalidOrExpired: 'Token je neplatný nebo vypršel.',
    tokenNotProvided: 'Token není poskytnut.',
    unPublishingDocument: 'Při zrušení publikování tohoto dokumentu došlo k chybě.',
    unableToDeleteCount: 'Nelze smazat {{count}} z {{total}} {{label}}',
    unableToUpdateCount: 'Nelze aktualizovat {{count}} z {{total}} {{label}}.',
    unauthorized: 'Neautorizováno, pro zadání tohoto požadavku musíte být přihlášeni.',
    unknown: 'Došlo k neznámé chybě.',
    unspecific: 'Došlo k chybě.',
    userEmailAlreadyRegistered: 'Uživatel s daným e-mailem je již zaregistrován.',
    userLocked: 'Tento uživatel je uzamčen kvůli příliš mnoha neúspěšným pokusům o přihlášení.',
    usernameAlreadyRegistered: 'Uživatel se zadaným uživatelským jménem je již zaregistrován.',
    usernameOrPasswordIncorrect: 'Zadané uživatelské jméno nebo heslo je nesprávné.',
    valueMustBeUnique: 'Hodnota musí být jedinečná',
    verificationTokenInvalid: 'Ověřovací token je neplatný.',
  },
  fields: {
    addLabel: 'Přidat {{label}}',
    addLink: 'Přidat odkaz',
    addNew: 'Přidat nový',
    addNewLabel: 'Přidat nový {{label}}',
    addRelationship: 'Přidat vztah',
    addUpload: 'Přidat nahrávání',
    block: 'blok',
    blockType: 'Typ bloku',
    blocks: 'bloky',
    chooseBetweenCustomTextOrDocument:
      'Zvolte mezi vložením vlastního textového URL nebo odkazováním na jiný dokument.',
    chooseDocumentToLink: 'Vyberte dokument, na který se chcete odkázat',
    chooseFromExisting: 'Vybrat z existujících',
    chooseLabel: 'Vybrat {{label}}',
    collapseAll: 'Sbalit vše',
    customURL: 'Vlastní URL',
    editLabelData: 'Upravit data {{label}}',
    editLink: 'Upravit odkaz',
    editRelationship: 'Upravit vztah',
    enterURL: 'Zadejte URL',
    internalLink: 'Interní odkaz',
    itemsAndMore: '{{items}} a {{count}} dalších',
    labelRelationship: 'Vztah {{label}}',
    latitude: 'Zeměpisná šířka',
    linkType: 'Typ odkazu',
    linkedTo: 'Odkaz na <0>{{label}}</0>',
    longitude: 'Zeměpisná délka',
    newLabel: 'Nový {{label}}',
    openInNewTab: 'Otevřít v nové záložce',
    passwordsDoNotMatch: 'Hesla se neshodují.',
    relatedDocument: 'Související dokument',
    relationTo: 'Vztah k',
    removeRelationship: 'Odstranit vztah',
    removeUpload: 'Odstranit nahrání',
    saveChanges: 'Uložit změny',
    searchForBlock: 'Hledat blok',
    selectExistingLabel: 'Vybrat existující {{label}}',
    selectFieldsToEdit: 'Vyberte pole, která chcete upravit',
    showAll: 'Zobrazit vše',
    swapRelationship: 'Zaměnit vztah',
    swapUpload: 'Vyměnit nahrání',
    textToDisplay: 'Text k zobrazení',
    toggleBlock: 'Přepnout blok',
    uploadNewLabel: 'Nahrát nový {{label}}',
  },
  general: {
    aboutToDelete: 'Chystáte se odstranit {{label}} <1>{{title}}</1>. Jste si jisti?',
    aboutToDeleteCount_many: 'Chystáte se smazat {{count}} {{label}}',
    aboutToDeleteCount_one: 'Chystáte se smazat {{count}} {{label}}',
    aboutToDeleteCount_other: 'Chystáte se smazat {{count}} {{label}}',
    addBelow: 'Přidat pod',
    addFilter: 'Přidat filtr',
    adminTheme: 'Motiv administračního rozhraní',
    and: 'a',
    applyChanges: 'Použít změny',
    ascending: 'Vzestupně',
    automatic: 'Automatický',
    backToDashboard: 'Zpět na nástěnku',
    cancel: 'Zrušit',
    changesNotSaved: 'Vaše změny nebyly uloženy. Pokud teď odejdete, ztratíte své změny.',
    clearAll: undefined,
    close: 'Zavřít',
    collapse: 'Sbalit',
    collections: 'Kolekce',
    columnToSort: 'Sloupec k seřazení',
    columns: 'Sloupce',
    confirm: 'Potvrdit',
    confirmDeletion: 'Potvrdit odstranění',
    confirmDuplication: 'Potvrdit duplikaci',
    copied: 'Zkopírováno',
    copy: 'Kopírovat',
    create: 'Vytvořit',
    createNew: 'Vytvořit nové',
    createNewLabel: 'Vytvořit nový {{label}}',
    created: 'Vytvořeno',
    createdAt: 'Vytvořeno v',
    creating: 'Vytváření',
    creatingNewLabel: 'Vytváření nového {{label}}',
    currentlyEditing:
      'právě upravuje tento dokument. Pokud převezmete kontrolu, budou zablokováni v pokračování úprav a mohou také přijít o neuložené změny.',
    custom: 'Vlastní',
    dark: 'Tmavý',
    dashboard: 'Nástěnka',
    delete: 'Odstranit',
    deletedCountSuccessfully: 'Úspěšně smazáno {{count}} {{label}}.',
    deletedSuccessfully: 'Úspěšně odstraněno.',
    deleting: 'Odstraňování...',
    depth: 'Hloubka',
    descending: 'Sestupně',
    deselectAllRows: 'Zrušte výběr všech řádků',
    document: 'Dokument',
    documentLocked: 'Dokument je uzamčen',
    documents: 'Dokumenty',
    duplicate: 'Duplikovat',
    duplicateWithoutSaving: 'Duplikovat bez uložení změn',
    edit: 'Upravit',
    editLabel: 'Upravit {{label}}',
    editedSince: 'Upraveno od',
    editing: 'Úprava',
    editingLabel_many: 'Úprava {{count}} {{label}}',
    editingLabel_one: 'Úprava {{count}} {{label}}',
    editingLabel_other: 'Úprava {{count}} {{label}}',
    editingTakenOver: 'Úpravy byly převzaty',
    email: 'E-mail',
    emailAddress: 'E-mailová adresa',
    enterAValue: 'Zadejte hodnotu',
    error: 'Chyba',
    errors: 'Chyby',
    fallbackToDefaultLocale: 'Zpětné přepnutí do výchozího locale',
    false: 'Nepravda',
    filter: 'Filtr',
    filterWhere: 'Filtrovat {{label}} kde',
    filters: 'Filtry',
    globals: 'Globální',
    goBack: 'Vrátit se',
    isEditing: 'upravuje',
    language: 'Jazyk',
    lastModified: 'Naposledy změněno',
    leaveAnyway: 'Přesto odejít',
    leaveWithoutSaving: 'Odejít bez uložení',
    light: 'Světlé',
    livePreview: 'Náhled',
    loading: 'Načítání',
    locale: 'Místní verze',
    locales: 'Lokality',
    menu: 'Jídelní lístek',
    moveDown: 'Posunout dolů',
    moveUp: 'Posunout nahoru',
    newPassword: 'Nové heslo',
    next: 'Další',
    noFiltersSet: 'Nenastaveny žádné filtry',
    noLabel: '<Žádný {{label}}>',
    noOptions: 'Žádné možnosti',
    noResults:
      'Nebyly nalezeny žádné {{label}}. Buď ještě neexistují žádné {{label}}, nebo žádné nesplňují filtry, které jste zadali výše.',
    noValue: 'Žádná hodnota',
    none: 'Žádné',
    notFound: 'Nenalezeno',
    nothingFound: 'Nic nenalezeno',
    of: 'z',
    open: 'Otevřít',
    or: 'Nebo',
    order: 'Pořadí',
    pageNotFound: 'Stránka nenalezena',
    password: 'Heslo',
    payloadSettings: 'Payload nastavení',
    perPage: 'Na stránku: {{limit}}',
    previous: 'Předchozí',
    remove: 'Odstranit',
    reset: 'Resetovat',
    row: 'Řádek',
    rows: 'Řádky',
    save: 'Uložit',
    saving: 'Ukládání...',
    searchBy: 'Vyhledat podle {{label}}',
    selectAll: 'Vybrat vše {{count}} {{label}}',
    selectAllRows: 'Vyberte všechny řádky',
    selectValue: 'Vyberte hodnotu',
    selectedCount: 'Vybráno {{count}} {{label}}',
    showAllLabel: 'Zobrazit všechny {{label}}',
    sorryNotFound: 'Je nám líto, ale neexistuje nic, co by odpovídalo vašemu požadavku.',
    sort: 'Třídit',
    sortByLabelDirection: 'Seřadit podle {{label}} {{direction}}',
    stayOnThisPage: 'Zůstat na této stránce',
    submissionSuccessful: 'Odeslání úspěšné.',
    submit: 'Odeslat',
    submitting: 'Odesílání...',
    success: 'Úspěch',
    successfullyCreated: '{{label}} úspěšně vytvořeno.',
    successfullyDuplicated: '{{label}} úspěšně duplikováno.',
    takeOver: 'Převzít',
    thisLanguage: 'Čeština',
    titleDeleted: '{{label}} "{{title}}" úspěšně smazáno.',
    true: 'Pravda',
    unauthorized: 'Neoprávněný',
    unsavedChangesDuplicate: 'Máte neuložené změny. Chtěli byste pokračovat v duplikování?',
    untitled: 'Bez názvu',
    updatedAt: 'Aktualizováno v',
    updatedCountSuccessfully: 'Úspěšně aktualizováno {{count}} {{label}}.',
    updatedSuccessfully: 'Úspěšně aktualizováno.',
    updating: 'Aktualizace',
    uploading: 'Nahrávání',
    user: 'Uživatel',
    username: 'Uživatelské jméno',
    users: 'Uživatelé',
    value: 'Hodnota',
    viewReadOnly: 'Zobrazit pouze pro čtení',
    welcome: 'Vítejte',
  },
  operators: {
    contains: 'obsahuje',
    equals: 'rovná se',
    exists: 'existuje',
    intersects: 'protíná se',
    isGreaterThan: 'je větší než',
    isGreaterThanOrEqualTo: 'je větší nebo rovno',
    isIn: 'je v',
    isLessThan: 'je menší než',
    isLessThanOrEqualTo: 'je menší nebo rovno',
    isLike: 'je jako',
    isNotEqualTo: 'není rovno',
    isNotIn: 'není v',
    near: 'blízko',
    within: 'uvnitř',
  },
  upload: {
    addFile: 'Přidat soubor',
    addFiles: 'Přidat soubory',
    bulkUpload: 'Hromadné nahrání',
    crop: 'Ořez',
    cropToolDescription:
      'Přetáhněte rohy vybrané oblasti, nakreslete novou oblast nebo upravte níže uvedené hodnoty.',
    dragAndDrop: 'Přetáhněte soubor',
    dragAndDropHere: 'nebo sem přetáhněte soubor',
    editImage: 'Upravit obrázek',
    fileName: 'Název souboru',
    fileSize: 'Velikost souboru',
    fileToUpload: 'Soubor k nahrání',
    filesToUpload: 'Soubory k nahrání',
    focalPoint: 'Středobod',
    focalPointDescription:
      'Přetáhněte bod zaměření přímo na náhled nebo upravte níže uvedené hodnoty.',
    height: 'Výška',
    lessInfo: 'Méně informací',
    moreInfo: 'Více informací',
    pasteURL: 'Vložit URL',
    previewSizes: 'Náhled velikostí',
    selectCollectionToBrowse: 'Vyberte kolekci pro procházení',
    selectFile: 'Vyberte soubor',
    setCropArea: 'Nastavit oblast ořezu',
    setFocalPoint: 'Nastavit středobod',
    sizes: 'Velikosti',
    sizesFor: 'Velikosti pro {{label}}',
    width: 'Šířka',
  },
  validation: {
    emailAddress: 'Zadejte prosím platnou e-mailovou adresu.',
    enterNumber: 'Zadejte prosím platné číslo.',
    fieldHasNo: 'Toto pole nemá {{label}}',
    greaterThanMax: '{{value}} je vyšší než maximálně povolená {{label}} {{max}}.',
    invalidInput: 'Toto pole má neplatný vstup.',
    invalidSelection: 'Toto pole má neplatný výběr.',
    invalidSelections: 'Toto pole má následující neplatné výběry:',
    lessThanMin: '{{value}} je nižší než minimálně povolená {{label}} {{min}}.',
    limitReached: 'Dosáhnutý limit, mohou být přidány pouze {{max}} položky.',
    longerThanMin: 'Tato hodnota musí být delší než minimální délka {{minLength}} znaků.',
    notValidDate: '"{{value}}" není platné datum.',
    required: 'Toto pole je povinné.',
    requiresAtLeast: 'Toto pole vyžaduje alespoň {{count}} {{label}}.',
    requiresNoMoreThan: 'Toto pole vyžaduje ne více než {{count}} {{label}}.',
    requiresTwoNumbers: 'Toto pole vyžaduje dvě čísla.',
    shorterThanMax: 'Tato hodnota musí být kratší než maximální délka {{maxLength}} znaků.',
    trueOrFalse: 'Toto pole může být rovno pouze true nebo false.',
    username:
      'Prosím, zadejte platné uživatelské jméno. Může obsahovat písmena, čísla, pomlčky, tečky a podtržítka.',
    validUploadID: 'Toto pole není platné ID pro odeslání.',
  },
  version: {
    type: 'Typ',
    aboutToPublishSelection: 'Chystáte se publikovat všechny {{label}} ve výběru. Jsi si jistá?',
    aboutToRestore:
      'Chystáte se obnovit tento {{label}} dokument do stavu, v jakém byl {{versionDate}}.',
    aboutToRestoreGlobal:
      'Chystáte se obnovit globální {{label}} do stavu, v jakém byl {{versionDate}}.',
    aboutToRevertToPublished:
      'Chystáte se vrátit změny tohoto dokumentu do jeho publikovaného stavu. Jste si jisti?',
    aboutToUnpublish: 'Chystáte se zrušit publikování tohoto dokumentu. Jste si jisti?',
    aboutToUnpublishSelection:
      'Chystáte se zrušit publikování všech {{label}} ve výběru. Jsi si jistá?',
    autosave: 'Automatické uložení',
    autosavedSuccessfully: 'Úspěšně uloženo automaticky.',
    autosavedVersion: 'Verze automatického uložení',
    changed: 'Změněno',
    compareVersion: 'Porovnat verzi s:',
    confirmPublish: 'Potvrďte publikování',
    confirmRevertToSaved: 'Potvrdit vrácení k uloženému',
    confirmUnpublish: 'Potvrdit zrušení publikování',
    confirmVersionRestoration: 'Potvrdit obnovení verze',
    currentDocumentStatus: 'Současný {{docStatus}} dokument',
    currentDraft: 'Současný koncept',
    currentPublishedVersion: 'Aktuálně publikovaná verze',
    draft: 'Koncept',
    draftSavedSuccessfully: 'Koncept úspěšně uložen.',
    lastSavedAgo: 'Naposledy uloženo před {{distance}}',
    noFurtherVersionsFound: 'Nenalezeny další verze',
    noRowsFound: 'Nenalezen {{label}}',
    noRowsSelected: undefined,
    preview: 'Náhled',
    previouslyPublished: 'Dříve publikováno',
    problemRestoringVersion: 'Při obnovování této verze došlo k problému',
    publish: 'Publikovat',
    publishChanges: 'Publikovat změny',
    published: 'Publikováno',
    publishing: 'Publikování',
    restoreAsDraft: 'Obnovit jako koncept',
    restoreThisVersion: 'Obnovit tuto verzi',
    restoredSuccessfully: 'Úspěšně obnoveno.',
    restoring: 'Obnovování...',
    revertToPublished: 'Vrátit se k publikovanému',
    reverting: 'Vracení...',
    saveDraft: 'Uložit koncept',
    selectLocales: 'Vyberte místní verze pro zobrazení',
    selectVersionToCompare: 'Vyberte verzi pro porovnání',
    showLocales: 'Zobrazit místní verze:',
    showingVersionsFor: 'Zobrazují se verze pro:',
    status: 'Stav',
    unpublish: 'Zrušit publikování',
    unpublishing: 'Zrušuji publikování...',
    version: 'Verze',
    versionCount_many: '{{count}} verzí nalezeno',
    versionCount_none: 'Žádné verze nenalezeny',
    versionCount_one: '{{count}} verze nalezena',
    versionCount_other: '{{count}} verzí nalezeno',
    versionCreatedOn: '{{version}} vytvořena:',
    versionID: 'ID verze',
    versions: 'Verze',
    viewingVersion: 'Zobrazuji verzi pro {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'Zobrazuji verzi pro globální {{entityLabel}}',
    viewingVersions: 'Zobrazuji verze pro {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: 'Zobrazuji verze pro globální {{entityLabel}}',
  },
}

export const cs: Language = {
  dateFNSKey: 'cs',
  translations: csTranslations,
}
