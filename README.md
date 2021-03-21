# GroupArrayElements
Group elements of a given array by <code>N</code>
<div>
   <h3 id="group"><a href="#group" class="fa fa-link"></a><code>groupArrayElements(array, [N=1])</code></h3>
   <p>Creates an array of elements divided into <code>N</code> equally sized arrays. If <code>array</code> can't be split evenly, the final group will be the remaining elements.</p>
   <h4>Arguments</h4>
   <ol>
      <li><code>array</code> <em>(Array)</em>: The array to process.</li>
      <li><code>[N=1]</code> <em>(number)</em>: The number of groups to divide by</li>
   </ol>
   <h4>Returns</h4>
   <p><em>(Array)</em>: Returns the new array of N elements .</p>
   <p><em>(undefined)</em>: For empty array, negative or N = 0 .</p>
   <h4>Example</h4>
   <div class="highlight js">
      <pre>
      <div><span class="name">group</span>([<span class="string">'1'</span><span class="delimiter">,</span>&nbsp;<span class="string">'2'</span><span     class="delimiter">,</span>&nbsp;<span class="string">'3'</span><span class="delimiter">,</span>&nbsp;<span class="string">'4'</span><span class="delimiter">,</span>&nbsp;<span class="string">'5'</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[['1',&nbsp;'2'],&nbsp;['3',&nbsp;'4'],&nbsp;['5']]</span></div><div>&nbsp;</div>
</div>
