export const hotTemplate = `
<ion-header>
  <ion-navbar color="primary">
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>

    <ion-title>
      Hot
    </ion-title>

    <ion-buttons end>
      <button ion-button icon-only (tap)="openPage('SearchPage')">
        <ion-icon name="ios-search-outline"></ion-icon>
      </button>
      <button ion-button icon-only>
        <ion-icon name="ios-notifications-outline"></ion-icon>
      </button>
    </ion-buttons>

  </ion-navbar>
</ion-header>

<ion-content>

  <ion-refresher (ionRefresh)="doRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <skeleton-loading *ngIf="contents.length < 1"></skeleton-loading>

  <ion-list [virtualScroll]="contents" (bufferRatio)="25" [virtualTrackBy]="identify">

    <ion-grid no-padding>
      <ion-row no-padding>
        <ion-col *virtualItem="let content" col-12 no-padding>
          <ion-card>
            <ion-card-header no-padding>
              <ion-note class="reblog" *ngIf="content.reblogged_by.length>0">
                <ion-icon name="return-right"></ion-icon>
                Reblogged by @{{ content.reblogged_by }}
              </ion-note>

              <ion-item>
                <ion-avatar item-start>
                  <img src="https://img.busy.org/@{{content.author}}?s=100">
                </ion-avatar>
                <div>
                  <ion-badge color="primary"> {{ content.author }}</ion-badge>
                  <ion-badge color="gray"> {{ content.author_reputation }} </ion-badge>
                </div>
                <div class="mt3">
                  <ion-badge color="light">
                    <ion-icon mini name="attach"></ion-icon>
                    &nbsp; {{ content.category }}
                  </ion-badge>
                  <ion-note end>{{ content.created }}</ion-note>
                </div>
                <ion-icon *ngIf="!content.isVoting && !content.voted" name="ios-thumbs-up-outline" item-right (tap)="castVote(i, content.author, content.permlink, 10000);"></ion-icon>

                <ion-icon *ngIf="!content.isVoting && content.voted" name="ios-thumbs-up" item-right color="primary" (tap)="castVote(i, content.author, content.permlink, 0);"></ion-icon>

                <ion-spinner *ngIf="content.isVoting" item-right></ion-spinner>
              </ion-item>
            </ion-card-header>

            <ion-card-content no-padding (tap)="postOpen(content, i)">
              <h2 style="overflow: scroll" padding>{{ content.title }}</h2>
              <!-- ENABLE BELOW IN PRODUCTION MODE -->
              <!-- <img-loader *ngIf="content.json_metadata.image" class="img" [src]="content.json_metadata.image[0]"></img-loader> -->

              <!-- DISABLE BELOW IN PRODUCTION MODE -->
              <div class="img" *ngIf="content.json_metadata.image" class="img" [ngStyle]="{'background-image': 'url(' + content.json_metadata.image[0] + ')'}"></div>

            </ion-card-content>

            <ion-row>

              <ion-col col-5 text-center>
                <div style="float: left;" *ngIf="content.voters">
                  <div class="voters">
                    <span class="voters_image" *ngFor="let voter of content.voters">
                      <img [src]="voter.profile_picture">
                    </span>
                  </div>
                  <div class="likes">
                    <p>{{ content.net_votes }}</p>
                  </div>
                </div>
              </ion-col>

              <ion-col col-3 text-center>
                <button ion-button clear small left (tap)="openComments(content)">
                  <ion-icon name="ios-text"></ion-icon>
                  &nbsp;
                  <div class="info">{{ content.children }}</div>
                </button>
              </ion-col>

              <ion-col col-4 text-center>
                <button end ion-button icon-right clear small>
                  <ion-icon name="cash"></ion-icon>
                  &nbsp;
                  <div class="info">
                    {{ content.pending_payout_value | currency:'USD': 'symbol' }}
                  </div>
                </button>
              </ion-col>

            </ion-row>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-list>

  <ion-infinite-scroll *ngIf="contents.length > 1" (ionInfinite)="doInfinite($event)" distance="1%">
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>

  <ion-fab right bottom>
    <button ion-fab color="primary" (tap)="openPage('PostPage')">
      <ion-icon ios="md-create" md="md-create"></ion-icon>
    </button>
  </ion-fab>

</ion-content>
`;