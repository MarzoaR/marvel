'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">marvel documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d0e6d1da1c35afea6b6118580bc299a5"' : 'data-target="#xs-components-links-module-AppModule-d0e6d1da1c35afea6b6118580bc299a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d0e6d1da1c35afea6b6118580bc299a5"' :
                                            'id="xs-components-links-module-AppModule-d0e6d1da1c35afea6b6118580bc299a5"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContentModule.html" data-type="entity-link">ContentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContentModule-4ab9542c1536d92e5b7cf8b3242d38df"' : 'data-target="#xs-components-links-module-ContentModule-4ab9542c1536d92e5b7cf8b3242d38df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContentModule-4ab9542c1536d92e5b7cf8b3242d38df"' :
                                            'id="xs-components-links-module-ContentModule-4ab9542c1536d92e5b7cf8b3242d38df"' }>
                                            <li class="link">
                                                <a href="components/CharacterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CharacterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CharacterDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CharacterDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CharactersListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CharactersListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComicComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComicDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComicDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComicsListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComicsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreatorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreatorDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreatorDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreatorsListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreatorsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SerieComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SerieDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SerieDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SeriesListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SeriesListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-ContentModule-4ab9542c1536d92e5b7cf8b3242d38df"' : 'data-target="#xs-pipes-links-module-ContentModule-4ab9542c1536d92e5b7cf8b3242d38df"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ContentModule-4ab9542c1536d92e5b7cf8b3242d38df"' :
                                            'id="xs-pipes-links-module-ContentModule-4ab9542c1536d92e5b7cf8b3242d38df"' }>
                                            <li class="link">
                                                <a href="pipes/ConcatThumbnailPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConcatThumbnailPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CreatorsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreatorsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PricePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PricePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TypeDataPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TypeDataPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContentRoutingModule.html" data-type="entity-link">ContentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-ee1325e144222baceb7dbad2c3b7fc59"' : 'data-target="#xs-components-links-module-HomeModule-ee1325e144222baceb7dbad2c3b7fc59"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-ee1325e144222baceb7dbad2c3b7fc59"' :
                                            'id="xs-components-links-module-HomeModule-ee1325e144222baceb7dbad2c3b7fc59"' }>
                                            <li class="link">
                                                <a href="components/NewsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-10516885e71771c19e47c2a8a74b207f"' : 'data-target="#xs-components-links-module-SharedModule-10516885e71771c19e47c2a8a74b207f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-10516885e71771c19e47c2a8a74b207f"' :
                                            'id="xs-components-links-module-SharedModule-10516885e71771c19e47c2a8a74b207f"' }>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ContentService.html" data-type="entity-link">ContentService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Characters.html" data-type="entity-link">Characters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Characters-1.html" data-type="entity-link">Characters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Characters-2.html" data-type="entity-link">Characters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comics.html" data-type="entity-link">Comics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comics-1.html" data-type="entity-link">Comics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comics-2.html" data-type="entity-link">Comics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Creators.html" data-type="entity-link">Creators</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Creators-1.html" data-type="entity-link">Creators</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Creators-2.html" data-type="entity-link">Creators</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data.html" data-type="entity-link">Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data-1.html" data-type="entity-link">Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data-2.html" data-type="entity-link">Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data-3.html" data-type="entity-link">Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Date.html" data-type="entity-link">Date</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Events.html" data-type="entity-link">Events</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Events-1.html" data-type="entity-link">Events</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Events-2.html" data-type="entity-link">Events</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item.html" data-type="entity-link">Item</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item-1.html" data-type="entity-link">Item</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item-2.html" data-type="entity-link">Item</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item-3.html" data-type="entity-link">Item</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item2.html" data-type="entity-link">Item2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item2-1.html" data-type="entity-link">Item2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item2-2.html" data-type="entity-link">Item2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item2-3.html" data-type="entity-link">Item2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item3.html" data-type="entity-link">Item3</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Price.html" data-type="entity-link">Price</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchCharactersResponse.html" data-type="entity-link">SearchCharactersResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchComicsResponse.html" data-type="entity-link">SearchComicsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchCreatorsResponse.html" data-type="entity-link">SearchCreatorsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchSeriesResponse.html" data-type="entity-link">SearchSeriesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Series.html" data-type="entity-link">Series</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Series-1.html" data-type="entity-link">Series</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Stories.html" data-type="entity-link">Stories</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Stories-1.html" data-type="entity-link">Stories</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Stories-2.html" data-type="entity-link">Stories</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Stories-3.html" data-type="entity-link">Stories</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TextObject.html" data-type="entity-link">TextObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Thumbnail.html" data-type="entity-link">Thumbnail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Thumbnail-1.html" data-type="entity-link">Thumbnail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Thumbnail-2.html" data-type="entity-link">Thumbnail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Thumbnail-3.html" data-type="entity-link">Thumbnail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Url.html" data-type="entity-link">Url</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Url-1.html" data-type="entity-link">Url</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Url-2.html" data-type="entity-link">Url</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Url-3.html" data-type="entity-link">Url</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});