import React, { ReactElement } from "react";

export const About = (): ReactElement => {
  return (
    <div className="container">
      <div className="row mts">
        <a className="pull-right phs" href="/">
          home
        </a>
        <a className="pull-right phs" href="/history">
          roll history
        </a>
      </div>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <h1 className="text-xl">about</h1>

          <h3 className="text-l mtm">who built this?</h3>
          <p>
            <a href="http://anneloverso.com/">Anne LoVerso</a>
            <a href="https://twitter.com/AnneLoVerso">
              <img alt="twitter" className="twitter" src='/assets/twitter.svg' />
            </a>
          </p>

          <h3 className="text-l mtm">why?</h3>
          <p>
            For my friend Justus over at <a href="https://www.kindtravelergames.com/">Kind Traveler Games</a> because he kept rolling so well in our RPGs.
          </p>

          <h3 className="text-l mtm">is it rigged?</h3>
          <p>
            Well, <i>Justus</i> claims that it isn't ¯\_(ツ)_/¯
          </p>

          <h3 className="text-l mtm">source code?</h3>
          <p>
            Sure thing, here's the <a href="https://github.com/aloverso/justusdiceroller">GitHub</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
