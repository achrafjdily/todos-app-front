export class Links {
    private MainLink = "http://todosappback.test/api/";
    private AuthLink = this.MainLink + "auth/";
    public readonly signUpLink = this.AuthLink + "signup";
    public readonly loginLink = this.AuthLink + "login";
    public readonly logoutLink = this.AuthLink + "logout";
    public readonly verifyLink = this.AuthLink + "verify";
    // private ReferentielLink = this.MainLink + "Search/";
    // private ConventionLink = this.MainLink + "Convention/";
    // public readonly ConventionSelectsLink = this.ConventionLink + "Enumerations";
    // public readonly CreateConventionLink = this.ConventionLink + "Insert";
    // private RefContextualLink = this.ReferentielLink + "Contextuel";
    // private MaladiePrecise = this.AuthLink + "Precise";
    // private MaladieContextual = this.AuthLink + "Contextuel";
    // private MaladieHeia = this.AuthLink + "Hierarchique";
    // public readonly Chapitres = this.AuthLink + "Chapitre";
    // private Groupes = this.AuthLink + "Groupe";
    // private AliasSaisie = this.AuthLink + "SaveSaisie";
    // public readonly Aliases = this.AuthLink + "AllAlias"
    // private saveAlias = this.AuthLink + "AddAlias"
    // getAuthLink(mal) {
    //     return this.MaladiePrecise + "?keyword=" + mal
    // }
    // getMaladieContxLink(mal) {
    //     return this.MaladieContextual + "?keyword=" + mal
    // }
    // getMaladieGroupe(chap) {
    //     return this.Groupes + "?keyword=" + chap
    // }
    // getHiea(chap = "", grp = "", key = "") {
    //     return this.MaladieHeia + "?request.chapitre=" + chap + "&request.groupe=" + grp + "&request.keyword=" + key
    // }
    // getSaisieAlias(alias) {
    //     return this.AliasSaisie + "?model.keyword=" + alias;
    // }
    // getSaveAlias(id, alias, code) {
    //     return this.saveAlias + "?model.id=" + id + "&model.newLabel=" + alias + "&model.code=" + code
    // }
    // getPrestations(keyword) {
    //     return this.RefContextualLink + "?model.cim=true&model.alc=true&model.forfait=true&model.ald=true&model.dm=true&model.gmr=true&model.ps=false&model.es=false&model.ngap=true&model.ccam=true&model.nabm=true&model.parapharmacie=true&model.lettreCle=true&model.wordKnown=false&model.labelPriority=false&model.query=" + keyword;
    // }
}