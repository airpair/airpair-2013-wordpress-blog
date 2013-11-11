<?php
/*
Template Name: Landing
*/
?>

<?php get_header('landing'); ?>

 <nav class="cf">
    <div class="tech">
      <a class="android" href="/android" title="android coding help & resources">Android</a>
      <a class="angular" href="/angularjs" title="AngularJS coding help & resources">AngularJS</a>
      <a class="backbone" href="/backbone.js" title="Backbonejs coding help & resources">Backbone.js</a>
      <a class="devops" href="/devops" title="DevOps coding help & resources">DevOps</a>
      <a class="cpp" href="/c++" title="C++ coding help & resources">C++</a>
      <a class="css" href="/css" title="CSS coding help & resources">Css</a>
      <a class="ember" href="/ember.js" title="emberjs coding help & resources">Ember.js</a>
      <a class="git" href="/git" title="git coding help & resources">Git</a>
      <a class="html" href="/html" title="html5 coding help & resources">Html</a>
      <a class="ios" href="/ios" title="ios coding help & resources">iOS</a>
      <a class="java" href="/java" title="java coding help & resources">Java</a>
      <a class="js" href="/javascript" title="JavaScript coding help & resources">JavaScript</a>
      <a class="net" href="/.net" title="Microsoft .net coding help & resources">.NET</a>
      <a class="node" href="/node.js" title="Node coding help & resources">Node.js</a>
      <a class="perf" href="/performance-testing" title="Performance coding help & resources">Perf</a>
      <a class="php" href="/php" title="PHP coding help & resources">PHP</a>
      <a class="python" href="/python" title="Python coding help & resources">Python</a>
      <a class="ruby" href="/ruby" title="Ruby coding help & resources">Ruby</a>
      <a class="rails" href="/ruby-on-rails" title="RoR coding help & resources">Rails</a>
      <a class="wp" href="/wordpress" title="Wordpress coding help & resources">WorPress</a>
    </div>
    <a class="logo" href="/"></a>

    <div class="contactus">(800) 487-0668</div>

    <ul class="navigation">
      <li><a href="/pair-programming"><span>{</span> pair programming <span>}</span></a></li>
      <li><a href="/code-review"><span>{</span> code review <span>}</span></a></li>
      <li><a href="/problem-solving"><span>{</span> problem solving <span>}</span></a></li>
      <li><a href="/code-mentoring"><span>{</span> code mentoring <span>}</span></a></li>
    </ul>
  </nav>

<?php the_content(); ?>


<div class='fold-border'></div>
<div id="cost" class="outer-container cf">
  <div class="middle-container">
    <div class="inner-container marketing">
      <div class="tagline"><h1>How much does it cost?</h1></div>

      <p>Airpair is a marketplace. Experts set their own rate and we match you corresponding to your budget.</p>

      <table>
        <tr>
          <th>$60<i>/hr</i></th>
          <th>$90<i>/hr</i></th>
          <th>$130<i>/hr</i></th>
          <th>$200<i>/hr</i></th>
          <th>$300<i>/hr</i></th>
        </tr>
        <tr>
          <td><div>Access 15%</div> of our experts <em>Solve any beginner challenge</em></td>
          <td><div>Access 40%</div> of our experts <em>Write software like an expert</em></td>
          <td><div>Access 60%</div> of our experts <em>Solve deep technical problems</em></td>
          <td><div>Access 90%</div> of our experts <em>Get solutions from world class talent</em></td>
          <td><div>Access 100%</div> of our experts <em>Leverage industry thought leaders</em></td>
        </tr>
      </table>

      <div class="inner-container">
        <div style="clear:both"></div><br />
        <a href="/find-an-expert" class="button" style="text-align:center;width:640px"> Get started</a>
      </div>
    </div>
  </div>
</div>

<footer>
    &copy; <a href="http://airpair.com/">airpair, inc. 2013 | </a>
</footer>

<script src="/javascripts/providers.js" defer onload="require('scripts/providers/all');"></script>

</body>
</html>
